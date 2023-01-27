import React from "react";
import Images from "./Images.jsx";
import AddDescription from "./AddDescription.jsx";
import Share from "./Share.jsx";
import Styles from "./Styles.jsx"


const Description = ({product, setProduct}) => {

  return (
    <div className = "description">
      <div className ="img">
        <Images productId = {product.id}/>
      </div>
      <div className="item-description">
        <p>{product.category}</p>
        <h2>{product.name}</h2>
        <p>{product.default_price}</p>
        <div>
          <Styles productId = {product.id}/>
        </div>
        <button> Add to Cart</button>
      </div>
      <AddDescription description={product.description} slogan={product.slogan} />
      <Share />
    </div>
  )

}
export default Description;