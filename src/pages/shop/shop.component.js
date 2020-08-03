import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import Collection from '../../components/collection/collection.component';
import './shop.styles.scss';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <Collection
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
