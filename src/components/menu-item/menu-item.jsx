import React from 'react';
import { Link } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const linkClass = (() => {
    const modifier = size ? ` _${size}` : '';

    return `menu-item${modifier}`;
  })();

  const linkTo = `/${linkUrl}`;

  const backgroundImageStyles = {
    backgroundImage: `url(${ imageUrl })`,
  };

  return (
    <Link
      className={ linkClass }
      to={ linkTo }
      title={ title }
    >
      <div
        className="menu-item__background-image"
        style={ backgroundImageStyles }
      />
      <article className="menu-item__content">
        <h1 className="menu-item__title">{ title.toUpperCase() }</h1>
        <span className="menu-item__subtitle">SHOP NOW</span>
      </article>
    </Link>
  );
};

export default MenuItem;
