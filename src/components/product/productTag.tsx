import { ProductData } from "models/product";

function ProductTags(props: any) {
    return (
      <>
        <hr />
        <div className="product-tags" style={{display: "flex", flexWrap: "wrap"}} >
          {props?.tags.map((item: string, index: number) => (
            <span key={index} className="tag">
              {item}
            </span>
          ))}
        </div>
        <hr />
      </>
    );
  }
  
  export default ProductTags;