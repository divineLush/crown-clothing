import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selector.js';

import CollectionPreview from '../collection-preview/collection-preview.jsx';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
  const previewItemsList = collections
    .map(({ ...collectionProps }, key) => (
      <CollectionPreview key={ key } { ...collectionProps } />
    ));

  return (
    <section className="collections-overview">
      { previewItemsList }
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
