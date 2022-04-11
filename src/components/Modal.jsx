import React from 'react';
import nft from '../assets/nft.jpeg';

const Modal = ({open, onClose}) => {
//    if open is not true
  if(!open) return null;

  return (
    <div onClick={onClose} className='overlay'>


        <div onClick={(e) => {e.stopPropagation() }}
             className='modalContainer'>

            <img src={nft} 
                 alt="nft logo" />

            <div className="modalRight">

                <p onClick={onClose}
                   className='closeBtn'>X</p>

                <div className="content">
                    <p>Do you want to get</p>
                    <h1>$20 bonus</h1>
                    <p>for your first trade ?</p>
                </div>

                <div className="btnContainer">
                    <button className="btnPrimary">
                        <span className='bold'>YES</span>, I love NFT
                    </button>
                    <button className='btnOutline'>
                        <span className='bold'>NO</span>, thanks
                    </button>
                </div>

            </div>

        </div>


    </div>
  )
}

export default Modal;