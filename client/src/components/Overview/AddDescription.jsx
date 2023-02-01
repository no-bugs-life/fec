import React from "react";
const AddDescription = ({description, slogan, features})=> {
    
   
     if (Object.keys(features).length !== 0) {
        const myFeatures = Object.keys(features).map(key => {
            return (
                <>               
                <li>{key}</li>
                <li>{features[key]}</li>
                </>

            )
        })
     }
    return (
        <div className="additionalInfo">
            <p>Description</p>
            <h3>{slogan}</h3>
            <p>{description}</p>
            <ul>
                
            </ul>
        </div>
    )
}
export default AddDescription;