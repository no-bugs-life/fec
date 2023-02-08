import React, {useState} from "react";
import Icons from "../Common/Icons.jsx"
const Share =()=> {
  const [isClicked, setIsClicked] = useState(false);
    const onExtendClick = () => {
        setIsClicked(!isClicked);
    }
    return (
      <div className="share">
          <span className="share-title">Share</span>
          <button className="add-extend-btn" onClick={onExtendClick}>{isClicked ? "-" : "+"}</button>
          {isClicked && <div className = "add-extend">
            <>
            <p className="share-desc">Share the link to: </p>
            <Icons width={"10px"} height={"30px"}/>
            </>
          </div>}

      </div>
  )
}
export default Share;