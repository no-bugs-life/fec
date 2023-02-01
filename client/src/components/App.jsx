import React, {useState, useEffect} from "react";
import "../css/Overview/styles.css";
import Description from "./Overview/Description.jsx";
import axios from "axios";
const App = ()=> {
  const [product, setProduct] = useState({});
  useEffect(()=> {
    axios.get("http://localhost:3000/api/products")
    .then(res => {
      setProduct(res.data[0]);

    })
    .catch(err => console.log(err))
  }, [])

  return(
    <div className="product-main">
      {Object.keys(product).length > 0 ? <Description product ={product}/> : null}
    </div>
  )
}
export default App;