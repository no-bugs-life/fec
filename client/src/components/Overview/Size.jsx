import React from "react";

const Size = ({onSizeClick}) => {

    return(<ul className="size-list">
        <li className="size-ind" onClick={onSizeClick} id="toggle-on" >
            <input type="button" name="size" id= {0} className="size-btn" value="XS" required={true}></input>
            
        </li>  
        <li className="size-ind" onClick={onSizeClick}>
            <input type="button" name="size" id= {1} value="S" className="size-btn"></input>
           
        </li>  
        <li className="size-ind" onClick={onSizeClick}>
            <input type="button" name="size" id= {2} value="M" className="size-btn"></input>
            
        </li>  
        <li className="size-ind" onClick={onSizeClick}>
            <input type="button" name="size" id= {3} value="L" className="size-btn"></input>
            
        </li>  
        <li className="size-ind" onClick={onSizeClick}>
            <input type="button" name="size" id= {4} value="XL" className="size-btn"></input>
           
        </li>  
        <li className="size-ind" onClick={onSizeClick} >
            <input type="button" name="size" id= {5} value="XXL" className="size-btn"></input>
            
            </li>  
    </ul>)
}

export default Size;