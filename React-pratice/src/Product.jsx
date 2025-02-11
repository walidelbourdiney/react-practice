import React from "react";

function Product(props) {
  return (
    <article className="product">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </article>
  );
}

export default Product;
