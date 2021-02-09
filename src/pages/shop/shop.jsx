import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selector.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';

const ShopPage = ({ collections }) => {
  const previewItemsList = collections
    .map(({ ...collectionProps }, key) => (
      <CollectionPreview key={ key } { ...collectionProps } />
    ));

  return (
    <section className="shop-page">
      { previewItemsList }
    </section>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
