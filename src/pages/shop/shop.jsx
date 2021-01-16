import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';

import collections from './shop-collections.js';

class ShopPage extends React.Component {
    state = {
      collections,
    }

    previewItemsList = () => this.state.collections
      .map(({ ...collectionProps }, key) => (
        <CollectionPreview key={ key } { ...collectionProps } />
      ));

    render () {
      return (
        <section className="shop-page">
          { this.previewItemsList() }
        </section>
      );
    }
}

export default ShopPage;
