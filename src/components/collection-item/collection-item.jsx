import React from 'react';

import './collection-item.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <article className="collection-item">
    <div
      className="collection-item__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <footer className="collection-item__footer">
      <span className='collection-item__name'>{ name }</span>
      <span className='collection-item__price'>{ price }</span>
    </footer>
  </article>
);

export default CollectionItem;
