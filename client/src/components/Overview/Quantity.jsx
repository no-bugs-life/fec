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
        <select id="size" name="size" key ="og"className="size-drop" required={true} onChange={onQuantityClick}>
            {newArray.slice(0, 11).map((el, index) => {
                return (<>
                {index === 0 ? <option value="default" key={index} required={true}></option>
                :index === 1 ? <option value={index} key={index} required={true}>{index}</option>
                : el === "undefined" ? <option value={index } key={index} required={true} disabled>{index}</option>
                : <option value={index} key={index} required={true}>{index}</option>}
                </>)
            })}
        </select>
        </>

    )
}
export default Quantity;