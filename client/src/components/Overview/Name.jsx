import React from 'react';
const Name = ({currentPick}) => {
    return(
        currentPick["sale_price"] 
        ? <p><span className="strike">{currentPick["original_price"]}</span>{currentPick["sale_price"]}</p>
       : <p>{currentPick["original_price"]}</p>
    )
}
export default Name;