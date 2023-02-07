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
    if (e.target.id === "next") {
      newId++;
      // if (newId > 0) {
      //   e.target.previousSibling.removeAttribute("disabled");
      // }
      // if (newId + 1 >= photos.length) {
      //   e.target.disabled = "true";
      // }
    }
    if (e.target.id === "prev") {
      newId--;
      // if (newId < photos.length) {
      //   e.target.nextSibling.removeAttribute("disabled")
      // }
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
    setCurrentList(photos.slice(start, end));

  }

  return (

    <>
    <div className="primary-img">
      {photos.length <= 1 ?  <>
      <button class="description-carousel description-carousel-btn-prev" id= "prev" onClick={onBtnClick} disabled>{'<'}</button>
      <button class="description-carousel description-carousel-btn-next" id ="next" onClick={onBtnClick} disabled>{'>'}</button>
      </>
      : defaultPhoto === photos[0] ?
      <>
      <button class="description-carousel description-carousel-btn-prev" id= "prev" onClick={onBtnClick} disabled>{'<'}</button>
      <button class="description-carousel description-carousel-btn-next" id ="next" onClick={onBtnClick}>{'>'}</button>
      </>
      : defaultPhoto === photos[photos.length - 1] ?
      <>
      <button class="description-carousel description-carousel-btn-prev" id= "prev" onClick={onBtnClick}>{'<'}</button>
      <button class="description-carousel description-carousel-btn-next" id ="next" onClick={onBtnClick} disabled>{'>'}</button>
      </>
      :
      <>
      <button class="description-carousel description-carousel-btn-prev" id= "prev" onClick={onBtnClick}>{'<'}</button>
      <button class="description-carousel description-carousel-btn-next" id ="next" onClick={onBtnClick}>{'>'}</button>
      </>
      }
      <img src={defaultPhoto.url} onClick={onModalClick}></img>
    </div>
    {photos.length && <Modal open={isOpen} defaultPhoto={defaultPhoto} photos={photos} setIsOpen={setIsOpen} onBtnClick={onBtnClick}/>}
    <div className="photo-carousel">
      {photos.length <= 1 ?
      <>
      <button class="description-carousel description-carousel-btn-prev-sm" id= "prev" onClick={onBtnClick} disabled>{'<'}</button>
      <button class="description-carousel description-carousel-btn-next-sm" id ="next" onClick={onBtnClick} disabled>{'>'}</button>
      </>
      : defaultPhoto === photos[0] ?
      <>
      <button class="description-carousel description-carousel-btn-prev-sm" id ="prev" onClick={onBtnClick} disabled>{'<'}</button>
      <button class="description-carousel description-carousel-btn-next-sm " id ="next" onClick={onBtnClick}>{'>'}</button>
      </>
      : defaultPhoto === photos[photos.length - 1] ?
      <>
      <button class="description-carousel description-carousel-btn-prev-sm" id= "prev" onClick={onBtnClick}>{'<'}</button>
      <button class="description-carousel description-carousel-btn-next-sm" id ="next" onClick={onBtnClick} disabled>{'>'}</button>
      </>
      :
      <>
      <button class="description-carousel description-carousel-btn-prev-sm" id= "prev" onClick={onBtnClick}>{'<'}</button>
      <button class="description-carousel description-carousel-btn-next-sm" id ="next" onClick={onBtnClick}>{'>'}</button>
      </>}
        <ul className="img-list">
        {currentList.map((photo, index) => {
          return(
            photo === defaultPhoto ?
            <li className="img-ind selected" id={index} key={index}><img id={index} src={photo.thumbnail_url} onClick={onImageClick}></img></li>
            : <li className="img-ind" id={index} key={index}><img id={index} src={photo.thumbnail_url} onClick={onImageClick}></img></li>


        )
      })}
      </ul>
    </div>
    </>
  )
}
export default Images;
