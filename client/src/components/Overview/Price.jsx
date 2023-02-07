import React from 'react';
const Price = ({currentPick}) => {
    return(
        currentPick["sale_price"]
        ? <><span className="strike original-price">${currentPick["original_price"]}</span><p className = "sale-price">${currentPick["sale_price"]}</p></>
       : <p className="original-price">${currentPick["original_price"]}</p>
    )
}
export default Price;
