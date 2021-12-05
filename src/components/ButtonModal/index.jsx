import React from 'react';
import './ButtonModal.css';

const ButtonModal = ({ name, toggleModal }) => {

  return(
    <button className="button-modal" onClick={toggleModal} type="button" >
      {name}
    </button>
  );
}

export default ButtonModal;
