import React,{useState} from "react";
import { createPortal } from "react-dom";
import Modal from "./modal.jsx"
const Images = ({photos, defaultPhoto, setDefaultPhoto})=>{
  const [isOpen, setIsOpen] = useState(false)
  const onModalClick = (e) => {
    setIsOpen(true)
    document.body.style.overflowY = 'hidden';
  }
  
  const onBtnClick = (e) => {
    e.preventDefault();
    let newId = 0;
    photos.forEach((photo, index) => {
      if (photo === defaultPhoto){
        newId = index;

      }
    });
    if (e.target.id === "next") {
      if (newId + 1 >= photos.length) {
        newId = 0;
      } else{
        newId += 1;
      }  
    }
    if (e.target.id === "prev") {
      if (newId - 1  < 0) {
        newId = photos.length - 1;
      } else{
        newId -= 1;
      }  
    }
    
    setDefaultPhoto(photos[newId])
  }
  
  return (
    
    <>
    <div className="primary-img">
      <button class="carousel carousel-btn-prev" id= "prev" onClick={onBtnClick}>{'<'}</button>
      <button class="carousel carousel-btn-next" id ="next" onClick={onBtnClick}>{'>'}</button>
      <img src={defaultPhoto.url} onClick={onModalClick}></img>
    </div>
    <Modal open={isOpen} src={defaultPhoto.url} setIsOpen={setIsOpen} onBtnClick={onBtnClick}/>
    <ul className="img-list">
      {photos.map((photo, index) => {
        return(
          photo === defaultPhoto ?
          <li className="img-ind" id={index} key={index}><img id={index} className="selected" src={photo.thumbnail_url} onClick={(e)=>{setDefaultPhoto(photos[e.target.id])}}></img></li> : <li className="img-ind" id={index} key={index}><img id={index} src={photo.thumbnail_url} onClick={(e)=>{setDefaultPhoto(photos[e.target.id])}}></img></li>
        )
      })}
    </ul>
    </>
    //one main-img
    //a list of all photos
  )
}
export default Images;