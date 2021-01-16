import React from 'react';

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  const itemsList = items
    .slice(0, 4)
    .map((item, key) => (
      <article
        key={ key }
        className="collection-preview__item"
      >
        { item.name }
      </article>
    ));

  return (
    <section className="collection-preview">
      <h1 className="collection-preview__title">
        { title.toUpperCase() }
      </h1>
      <section className="collection-preview__content">
        { itemsList }
      </section>
    </section>
  );
};

export default CollectionPreview;
