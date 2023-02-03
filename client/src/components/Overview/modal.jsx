import React from 'react';
import { createPortal } from "react-dom";
const Modal = ({open, setIsOpen, src, onBtnClick}) => {
    const onCloseClick = (e) => {
        setIsOpen(!open);
        document.body.style.overflowY = "visible";
    }
    return (
        open && createPortal(
        <div className='portal'>
            <img src={src}></img>
            <button className="modal-btn" onClick={onCloseClick}>X</button>
            <button class="carousel carousel-btn-prev" id= "prev" onClick={onBtnClick}>{'<'}</button>
      <button class="carousel carousel-btn-next" id ="next" onClick={onBtnClick}>{'>'}</button>
            <span className="modal-bg"></span>
        </div>
        , document.getElementById('portal')
    )
    )}
export default Modal;