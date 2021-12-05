import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = ({ toggleModal, url }) => (
  <li className="product" onClick={toggleModal}>
    <div className="container-img">
      <img className="product-img" src={url} alt="" />
      <FontAwesomeIcon className="icon-add" icon={faPlusCircle} />
    </div>
    <section className="product-info">
      <p>Tacones negros</p>
      <p>talla 6</p>
      <p>precio: 6$</p>
    </section>
  </li>
);

export default Card;
