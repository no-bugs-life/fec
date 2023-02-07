import React, {useState} from "react";
const Share =()=> {
  const [isClicked, setIsClicked] = useState(false);
    const onExtendClick = () => {
        setIsClicked(!isClicked);
    }
    return (
      <div className="share">
          <span className="share-title">Share</span>
          <button className="add-btn" onClick={onExtendClick}>{isClicked ? "-" : "+"}</button>
          {isClicked && <div className = "add-extend">
            <>
            <p className="share-desc">Share the link to: </p>
            <span className="share-link"><a href="" target="_blank">Facebook</a></span>
            <span className="share-link"><a href="" target="_blank">Instagram</a></span>
            <span className="share-link"><a href="" target="_blank">Twitter</a></span>
            </>
          </div>}

      </div>
  )
}
export default Share;