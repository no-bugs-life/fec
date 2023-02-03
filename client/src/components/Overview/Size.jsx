import React from "react";

const Size = ({currentInventory, onSizeClick}) => {
    // console.log((currentInventory[Object.keys(currentInventory)[5]].quantity))
    
    return(<ul className="size-list">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size, index) => (
                
            currentInventory[Object.keys(currentInventory)[index]].quantity === 0 ? <li className="size-ind" onClick={onSizeClick}>
            <input type="button" name="size" id= {index} className="size-btn" value={size} required={true} disabled></input></li>
            :index === 0 ?
                <li className="size-ind" onClick={onSizeClick} id="toggle-on" >
            <input type="button" name="size" id= {index} className="size-btn" value={size} required={true}></input></li> 
            : <li className="size-ind" onClick={onSizeClick}>
            <input type="button" name="size" id= {index} className="size-btn" value={size} required={true}></input></li>
            )
                
            )}
        {/* <li className="size-ind" onClick={onSizeClick} id="toggle-on" >
            <input type="button" name="size" id= {0} className="size-btn" value="XS" required={true}></input>
            
        </li>  
        <li className="size-ind" onClick={onSizeClick}>
            <input type="button" name="size" id= {1} value="S" className="size-btn" ></input>
           
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
            
            </li>   */}
    </ul>)
}

export default Size;