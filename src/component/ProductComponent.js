import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const renderList = products.map((product, i) => {
    // const{id,title, description,background_image,code,sequence}= products;
    return (
      <Link to={`/product/aaa`}>
        <div
          className="course-info"
          key={i}
          style={{ backgroundImage: `url("${product.background_image}")` }}
        >
          <div className="course-tit">
            <h4>{product.title}</h4>
            <br></br>
            <p>{product.description}</p>
            <button>learn more</button>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="product-container">{renderList}</div>;
};

export default ProductComponent;
