import axios from "axios";
import React,{useState} from "react";
const Images = ({photos})=>{
  return (
    <div className="product-img">
      <div className ="main-img">
      <img  src= {photos[0].url} ></img>
      </div>
      <div className="secondary-img">
      <img  src={photos[1].thumbnail_url} className="secondary"></img>
      <img  src={photos[2].thumbnail_url} className="secondary"></img>
      <img  src={photos[3].thumbnail_url} className="secondary"></img>
      <img  src={photos[4].thumbnail_url} className="secondary"></img>
      <img  src={photos[5].thumbnail_url} className="secondary"></img>
      </div>
    </div>
  )
}
export default Images;