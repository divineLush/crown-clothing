import React from 'react';

import CollectionItem from '../collection-item/collection-item.jsx';

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  const itemsList = items
    .slice(0, 4)
    .map(({ ...itemProps }, key) => (
      <CollectionItem key={ key } { ...itemProps } />
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
