import React from "react";
const Checkout = ({checkoutUpdate, onCheckoutClick, userSelection}) => {
    return (
        <>
            {checkoutUpdate
            ? <input type="button" id="checkout" value={"Added to Bag"} onClick={onCheckoutClick}></input>
            : <input type="button" id="checkout" value={"Add to Bag"} onClick={onCheckoutClick}></input>}
        </>
    )
}
export default Checkout;