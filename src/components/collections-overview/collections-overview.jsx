import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector.js';

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
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
