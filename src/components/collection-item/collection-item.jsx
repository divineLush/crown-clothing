import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/button.jsx';
import { addItem } from '../../redux/cart/cart.actions.js';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <article className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <footer className="collection-item__footer">
        <span className='collection-item__name'>{ name }</span>
        <span className='collection-item__price'>{ price }</span>
      </footer>
      <Button
        modifier="inverted"
        onClick={ () => addItem(item) }
      >
        Add to cart
      </Button>
    </article>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
