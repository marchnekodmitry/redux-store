import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './shop-header.css'

const ShopHeader = ({ numItems, totalPrice }) => {
  return (
    <header className='shop-header'>
      <div className='shop-header-wrapper'>
        <h1>Redux Store</h1>
        <span className='shop-header-info'>
          <FontAwesomeIcon className='shop-header-cart-icon' icon={faShoppingCart}/>
          {numItems} items (${totalPrice})
        </span>
      </div>
    </header>
  );
};

export default ShopHeader;