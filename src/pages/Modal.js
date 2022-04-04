import React,{useContext} from 'react';
import './../styles/modal.css';
import {FaTimes } from 'react-icons/fa';
import { AppContext } from './../pages/Context';
import Login from './../pages/Login';
const Modal = () => {
    const {isModalOpen, closeModal} = useContext(AppContext);
    return <div className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      } `}>
        <div className='modal-container'>
            <div>
              <p>modal</p>
              <Login/>
            </div>
            <button className='close-modal-btn'  onClick={closeModal}>
                <FaTimes/>
            </button>

        </div>

    </div>
};
export default Modal;