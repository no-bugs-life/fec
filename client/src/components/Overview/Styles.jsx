import React from "react";
const Styles = ({currentStyle, onClick}) => {
    return(

        <ul className="style-selector">
            {currentStyle.map((obj, index) => {
                return(
                    index === 0 ?
                    <li onClick={onClick} className="style" id= {index} key={index} ><img src={obj.photos[0].thumbnail_url} id="toggle-on"></img></li> :
                    <li onClick={onClick} className="style" id= {index} key={index}><img src={obj.photos[0].thumbnail_url}></img></li>
                   )
            })}
        </ul>

     )
}
export default Styles;