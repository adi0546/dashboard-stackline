import React, {useEffect} from "react";
import { useAppSelector } from "../hooks/useFetch";
import { fetchProduct } from "features/product/productSlice";
import ProductInfo from "components/product/productInfo";
import ProductGraph from "components/product/productSalesGraph";
import { Box } from "@mui/material";
import ProductSalesTable from "components/product/productSalesTable";

function ProductPage() {
    
    const {product} = useAppSelector((state) => state.product);

    return (
        <Box display="flex" height="90%" margin="20px">
            <Box width="20%" sx={{ mr: 2}}>
                <ProductInfo productInfo={product}/>
            </Box>
            <Box width="80%">
                <Box height="40%" sx={{ mb: 2 }}>
                    <ProductGraph product={product} />
                </Box>
                <Box height="60%">
                    <ProductSalesTable product={product} />
                </Box>
            </Box>
        </Box>
    );
}

export default ProductPage;