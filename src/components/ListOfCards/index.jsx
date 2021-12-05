import React from 'react';
import './ListOfCards.css';

const ListOfCards = (props) => (
  <ul className={`cards-container ${props.loading ? 'isLoading' : ''}`}>
    {props.error && props.onError()}
    {props.loading && props.onLoading()}
    {props.products && props.products.map(props.render)}
  </ul>
);

export default ListOfCards;
