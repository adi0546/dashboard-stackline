import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData } from '../../models/product';

interface ProductState {
  product: ProductData | null;
  error: string | undefined;
  loading: boolean;
}

export const fetchProduct = createAsyncThunk('/', async () => {
  const response = await fetch('srcData.json').then((data) => data.json());
  return response;
});

const initialState: ProductState = {
  product: null,
  error: undefined,
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<ProductData | null>) {
      state.product = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.product = action.payload[0];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
