import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.jsx';
import CollectionPage from '../collection/collection.jsx';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions.js';

// Route passes match, location and history as props
class ShopPage extends React.Component {
  // snapshot representation of collection array
  unsubscribeFromSnapshot = null;

  componentDidMount () {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    // send us the snapshot representing collection array
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      updateCollections(convertCollectionsSnapshotToMap(snapshot));
    });
  }

  render () {
    const { match } = this.props;

    return (
      <section className="shop-page">
        <Route
          exact
          path={ `${match.path}` }
          component={ CollectionsOverview }
        />
        <Route
          path={ `${match.path}/:collectionId` }
          component={ CollectionPage }
        />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
