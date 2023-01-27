import React from "react";
const Description = ({product}) => {

  return (
    <>
    <h2>{product.name}</h2>
    <p>{product.default_price}</p>
    <div>
      //style component
    </div>

    <button> Add to Cart</button>
    </>
  )

}
export default Description;