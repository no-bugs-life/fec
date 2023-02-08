import React from 'react';
import { createPortal } from "react-dom";
const Modal = ({open, setIsOpen, defaultPhoto, photos, onBtnClick}) => {
    const onCloseClick = (e) => {
        setIsOpen(!open);
        document.body.style.overflowY = "visible";
    }
    return (
        open && createPortal(
        <div className='description-portal'>
            <img src={defaultPhoto.url}></img>
            <button className="modal-btn" onClick={onCloseClick}>X</button>

            {photos.length <= 1 ?
                <>
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
            <span className="modal-bg"></span>
        </div>
        , document.getElementById('portal')
    )
    )}
export default Modal;