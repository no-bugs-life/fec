import React from "react";
const Quantity = ({currentSize, currentInventory, onQuantityClick}) => {
    let newArray = [];
    for (let i=0; i< currentInventory[currentSize].quantity; i++) {
        newArray.push(i);
    }
    while (newArray.length <= 11){
        newArray.push("undefined");
    }
    return(
        <>
        <label htmlFor="size">Qty: </label>
        <select id="size" name="size" className="size-drop" required={true} onChange={onQuantityClick} >
            {newArray.slice(0, 11).map((el, index) => {
                return (
                index === 0 ? <option key="default" value="default" required={true}></option>
                :index === 1 ? <option key={index} value={index} required>{index}</option>
                : el === "undefined" ? <option key={index} value={index } required={true} disabled>{index}</option>
                : <option key={index} value={index} required={true}>{index}</option>
                )
            })}
        </select>
        </>

    )
}
export default Quantity;