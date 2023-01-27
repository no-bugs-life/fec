import axios from "axios";
import React,{useState} from "react";
const Images = ({productId})=>{
  const [info, addInfo] = useState({});
  axios.get(`http://localhost:3000/api/products/${productId}/styles`)
  .then((result) => {
    console.log(result.data);
    addInfo(result.data)
  })
  .catch(err => console.log(err))

  return (
    <div className="product-img">
      <div className ="main-img">
      <img  src="" className = "primary"></img>
      </div>
      <div className="secondary-img">
      <img  src="" className="secondary"></img>
      <img  src="" className="secondary"></img>
      <img  src="" className="secondary"></img>
      <img  src="" className="secondary"></img>
      </div>
    </div>
  )
}
export default Images;