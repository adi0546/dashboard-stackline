import React, { useEffect } from 'react';
import './App.css';
import Banner from 'components/shared/banner';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from 'pages/ProductPage';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useFetch';
import { fetchProduct } from 'features/product/productSlice';
function App() {
  const dispatch = useAppDispatch();
  const { product, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  if (product === null) {
    return <div>Product not found</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  // Ideally, there would be a home page for applicatoin and product page would be a child of that
  // but for the sake of simplicity, I am using product page as the main page
  return (
    <Box sx={{ height: "100%" }}>
      <Banner />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </Router>
    </Box>
  );
}
export default App;
