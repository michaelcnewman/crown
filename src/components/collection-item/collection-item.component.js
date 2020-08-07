import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  return (
    <div className="collection-item" key={item.id * 100}>
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (cartItem) => dispatch(addItem(cartItem)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
