import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.jsx';
import CollectionPage from '../collection/collection.jsx';
import Spinner from '../../components/spinner/spinner.jsx';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions.js';

// gives back a new component wrapped around CollectionsOverview
const CollectionsOverviewSpinner = Spinner(CollectionsOverview);
const CollectionPageSpinner = Spinner(CollectionPage);

// Route passes match, location and history as props
class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  // snapshot representation of collection array
  unsubscribeFromSnapshot = null;

  componentDidMount () {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    // send us the snapshot representing collection array
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      updateCollections(convertCollectionsSnapshotToMap(snapshot));
      this.setState({ loading: false });
    });
  }

  render () {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <section className="shop-page">
        <Route
          exact
          path={ `${match.path}` }
          render={ props => (
            <CollectionsOverviewSpinner
              isLoading={ loading }
              { ...props }
            />)
          }
        />
        <Route
          path={ `${match.path}/:collectionId` }
          render={ props => (
            <CollectionPageSpinner
              isLoading={ loading }
              { ...props }
            />)
          }
        />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
