import React from "react";
const Styles = ({currentStyle, onClick}) => {
    return(

        <ul className="description-style-selector">
            {currentStyle.map((obj, index) => {
                return(
                    index === 0 ?
                    <li onClick={onClick} className="description-style" id= {index} key={index} ><img src={obj.photos[0].thumbnail_url} id="toggle-on" alt="image showing currently selected style for the product"></img></li> :
                    <li onClick={onClick} className="description-style" id= {index} key={index}><img src={obj.photos[0].thumbnail_url} alt="image showing style for the product"></img></li>
                   )
            })}
        </ul>

     )
}
export default Styles;