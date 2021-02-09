import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionByUrl } from '../../redux/shop/shop.selector.js';

import CollectionItem from '../../components/collection-item/collection-item.jsx';

import './collection.scss';

const CollectionPage = ({ collection,  match }) => (
  <section className="collection">
    <h2>{ collection.title }</h2>
  </section>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionByUrl(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
