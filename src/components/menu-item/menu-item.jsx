import React from 'react';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <article
    className={ `_${size} menu-item` }
  >
    <div
      className="menu-item__background-image"
      style={{ backgroundImage: `url(${ imageUrl })` }}
    />
    <div className="menu-item__content">
      <h1 className="menu-item__title">{ title.toUpperCase() }</h1>
      <span className="menu-item__subtitle">SHOP NOW</span>
    </div>
  </article>
);

export default MenuItem;
