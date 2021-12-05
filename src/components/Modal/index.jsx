import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

const Modal = (props) =>
  ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-container">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="modal-close"
          onClick={props.toggleModal}
        />
        {props.info && props.onInfo()}
        {props.price && props.onPrice()}
        {props.size && props.onSize()}
      </div>
    </div>,
    document.getElementById('modal-root')
  );

export default Modal;
