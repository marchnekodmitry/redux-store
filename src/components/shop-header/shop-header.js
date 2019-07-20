import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({ numItems, totalPrice }) => {
  return (
    <header className='shop-header'>
      <div className='shop-header-wrapper'>
        <Link to='/'>
          <h1>Redux Store</h1>
        </Link>
        <Link to='/cart'>
          <span className='shop-header-info'>
            <FontAwesomeIcon className='shop-header-cart-icon' icon={faShoppingCart}/>
            {numItems} items (${totalPrice})
          </span>
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = ({ numItems, orderTotal }) => {
  return {
    numItems,
    totalPrice: orderTotal
  }
};

export default connect(mapStateToProps)(ShopHeader);