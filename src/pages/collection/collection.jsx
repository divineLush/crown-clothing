import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionByUrl } from '../../redux/shop/shop.selector.js';

import CollectionItem from '../../components/collection-item/collection-item.jsx';

import './collection.scss';

const CollectionPage = ({ collection,  match }) => {
  const { title, items } = collection;
  const itemsList = items.map((item, key) => (
    <CollectionItem key={ key } item={ item } />
  ));

  return (
    <section className="collection-page">
      <h2 className="collection-page__title">{ title }</h2>
      <section className="collection-page__items">
        { itemsList }
      </section>
    </section>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionByUrl(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
