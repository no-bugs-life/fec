import React from "react";
const Quantity = ({currentSize, currentInventory}) => {
    console.log(currentInventory[currentSize])
    let newArray = [];
    for (let i=0; i< currentInventory[currentSize].quantity; i++) {
        newArray.push(i)
    }
    
    return(
        <>        
        <label htmlFor="size">Size</label>
        <select id="size" name="size" className="size-drop">
            {newArray.map((el, index) => {
                return (<>
                <option value={index}>{index}</option>
                </>)
            })}
        </select>
        </>

    )
}
export default Quantity;