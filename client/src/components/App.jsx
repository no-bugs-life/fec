import React, {useState, useEffect} from "react";
import "../css/styles.css";
import Description from "./Description.jsx";
import Images from "./Images.jsx";
import AddDescription from "./AddDescription.jsx";
import Share from "./Share.jsx";
const App = ()=> {



  return(
    <div className="product-main">
      <Description />
      <Images />
      <AddDescription />
      <Share />
    </div>
  )
}
export default App;