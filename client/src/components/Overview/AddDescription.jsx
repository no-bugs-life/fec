import React, {useState} from "react";
const AddDescription = ({description, slogan, features})=> {
    // const [isClicked, setIsClicked] = useState(false);
    // const onExtendClick = (e) => {
    //     setIsClicked(!isClicked);
    // }
    return (
        <>
            {/* <span className="add-title">Description</span> */}
            {/* <button className="add-extend-btn" onClick={onExtendClick}>{isClicked ? "-" : "+"}</button> */}
            {/* {isClicked && <div className = "add-extend"> */}
            <div className = "add-extend">
                <p className="add-slogan">{slogan}</p>
                <p className="add-detail">{description}</p>
                <ul>
                    {features.map((feature,index) => {
                        return(
                            <div className="add-features" key={index}>
                                <span className="add-feature" role="feature">{feature.feature} :</span>
                                <span className="add-value" role="value">{feature.value}</span>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
export default AddDescription;