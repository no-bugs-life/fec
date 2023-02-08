import React from "react";

const Size = ({currentInventory, onSizeClick}) => {
    // console.log(currentInventory)

    return(<ul className="item-description-size-list">

            {Object.keys(currentInventory).length && !Object.keys(currentInventory).includes('null')
            ? Object.keys(currentInventory).map((size, index) => (
                currentInventory[size].quantity ?
                <li className="item-description-size-ind" key= {index} id= {index} onClick={onSizeClick}>
                <input type="button" name="size" className="item-description-size-btn" value={currentInventory[size].size} required="required"></input>
                </li> :
                <li className="item-description-size-ind" key={index} id= {index} onClick={onSizeClick}>
                <input type="button" name="size" className="item-description-size-btn" value={currentInventory[size].size} disabled></input>
                </li>
            ))
            : <li className="item-description-size-ind" key="default" id= "oneSize" onClick={onSizeClick}>
        <input type="button" id= "onesize" name="size" className="item-description-size-btn" value="One Size" required="required"></input>
        </li>}
    </ul>)
}

export default Size;