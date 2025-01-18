import React from "react";
import { Box, Typography } from "@mui/material";
import { sxWhiteBox } from "../../styles/productStyles"
import { useAppSelector } from "hooks/useFetch";
import { ProductData } from "models/product";
import ProductTags from "./productTag";


function ProductInfo(props: any) {
  
  return (
    <Box sx={{ ...sxWhiteBox, height: "100%" }}>
      <Box sx={{ p: 2 }}>
        <img
          src={props.productInfo.image}
          className="product-image"
          alt={props.productInfo.subtitle}
        />
        <div className="title-text" style={{ textAlign: "center" }}>
          <p style={{fontSize: "large", fontWeight:"bold"}}>{props.productInfo.title}</p>
          <p style={{opacity: "40%"}}>{props.productInfo.subtitle}</p>
        </div>
        <div className="product-tags">
          <ProductTags tags={props.productInfo.tags}/>
        </div>
      </Box>
    </Box>
  );
}

export default ProductInfo;
