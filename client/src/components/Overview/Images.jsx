import React,{useState} from "react";
import Modal from "./Modal.jsx"
const Images = ({photos, defaultPhoto, setDefaultPhoto, currentList, setCurrentList})=>{
  const [isOpen, setIsOpen] = useState(false);


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
    if (e.target.id === "next" || e.target.id === "next-sm") {
      newId++;
    }
    if (e.target.id === "prev"|| e.target.id === "prev-sm") {
      newId--;
    }
    const newNum = photos.length - newId;
    let start = 0;
    let end = 0;
    if (newNum > 4) {
      start = newId;
      end = newId + 4;
    } else {
      start = photos.length - 4;
      end = photos.length;
    }
    setDefaultPhoto(photos[newId]);
    setCurrentList(photos.slice(start, end));
  }
  const onImageClick = (e)=> {
    let newId = 0;
    photos.forEach((photo, index) => {
      if (photo === defaultPhoto){
        newId = index;
      }
    });
    const newNum = photos.length - newId;
    let start = 0;
    let end = 0;
    if (newNum > 4) {
      start = newId;
      end = newId + 4;
    } else {
      start = photos.length - 4;
      end = photos.length;
    }
    setDefaultPhoto(currentList[e.target.id]);
  }

  return (
   <>
    <div className="primary-img">
      {photos.length <= 1 ?  <>
      <button className="description-carousel description-carousel-btn-prev" id= "prev" onClick={onBtnClick} disabled>{'<'}</button>
      <button className="description-carousel description-carousel-btn-next" id ="next" onClick={onBtnClick} disabled>{'>'}</button>
      </>
      : defaultPhoto === photos[0] ?
      <>
      <button className="description-carousel description-carousel-btn-prev" id= "prev" onClick={onBtnClick} disabled>{'<'}</button>
      <button className="description-carousel description-carousel-btn-next" id ="next" onClick={onBtnClick}>{'>'}</button>
      </>
      : defaultPhoto === photos[photos.length - 1] ?
      <>
      <button className="description-carousel description-carousel-btn-prev" id= "prev" onClick={onBtnClick}>{'<'}</button>
      <button className="description-carousel description-carousel-btn-next" id ="next" onClick={onBtnClick} disabled>{'>'}</button>
      </>
      :
      <>
      <button className="description-carousel description-carousel-btn-prev" id= "prev" onClick={onBtnClick}>{'<'}</button>
      <button className="description-carousel description-carousel-btn-next" id ="next" onClick={onBtnClick}>{'>'}</button>
      </>
      }
       {defaultPhoto.url === null ?
      <img src= "https://pngimg.com/uploads/apple/apple_PNG12489.png" alt="Main img showing the selected style's picture"></img>
    :
      <img fetchpriority="high" src={defaultPhoto.url} onClick={onModalClick} alt="Main img showing the selected style's picture"></img>}
    </div>
    {photos.length && <Modal open={isOpen} defaultPhoto={defaultPhoto} photos={photos} setIsOpen={setIsOpen} onBtnClick={onBtnClick}/>}
    <div className="photo-carousel">
      {photos.length <= 1 ?
      <>
      <button className="description-carousel description-carousel-btn-prev-sm" id= "prev-sm" onClick={onBtnClick} disabled>{'<'}</button>
      <button className="description-carousel description-carousel-btn-next-sm" id ="next-sm" onClick={onBtnClick} disabled>{'>'}</button>
      </>
      : defaultPhoto === photos[0] ?
      <>
      <button className="description-carousel description-carousel-btn-prev-sm" id ="prev-sm" onClick={onBtnClick} disabled>{'<'}</button>
      <button className="description-carousel description-carousel-btn-next-sm " id ="next-sm" onClick={onBtnClick}>{'>'}</button>
      </>
      : defaultPhoto === photos[photos.length - 1] ?
      <>
      <button className="description-carousel description-carousel-btn-prev-sm" id= "prev-sm" onClick={onBtnClick}>{'<'}</button>
      <button className="description-carousel description-carousel-btn-next-sm" id ="next-sm" onClick={onBtnClick} disabled>{'>'}</button>
      </>
      :
      <>
      <button className="description-carousel description-carousel-btn-prev-sm" id= "prev-sm" onClick={onBtnClick}>{'<'}</button>
      <button className="description-carousel description-carousel-btn-next-sm" id ="next-sm" onClick={onBtnClick}>{'>'}</button>
      </>}
        <ul className="img-list">
        {currentList.map((photo, index) => {
          return(
            photo.url === null ?
            <li className="img-ind selected"><img src="https://pngimg.com/uploads/apple/apple_PNG12489.png" alt="Image of default stock photo"></img></li>
            :photo === defaultPhoto ?
            <li className="img-ind selected" id={index} key={index}><img id={index} src={photo.thumbnail_url} onClick={onImageClick} alt="Image of currently selected image in image list"></img></li>
            : <li className="img-ind" id={index} key={index}><img id={index} src={photo.thumbnail_url} onClick={onImageClick} alt="Image of product of the currently selected style"></img></li>


        )
      })}
      </ul>
    </div>
    </>
  )
}
export default Images;
