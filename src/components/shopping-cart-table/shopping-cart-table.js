import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
        <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>{total}$</td>
          <td className='table-buttons'>
            <button
                onClick={() => onDelete(id)}
                className='btn btn-outline-danger btn-sm'>
              <FontAwesomeIcon icon={faTrash}/>
            </button>
            <button
                onClick={() => onIncrease(id)}
                className='btn btn-outline-success btn-sm'>
              <FontAwesomeIcon icon={faPlusCircle}/>
            </button>
            <button
                onClick={() => onDecrease(id)}
                className='btn btn-outline-warning btn-sm'>
              <FontAwesomeIcon icon={faMinusCircle}/>
            </button>
          </td>
        </tr>
    );
  };

  return (
      <div className='shopping-cart-table'>
        <h2>Your Order</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th className='table-buttons-header'>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            items.map(renderRow)
          }
          </tbody>
        </table>

        <div className='total'>
          Total: {total}$
        </div>
      </div>
  )
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => dispatch(bookAddedToCart(id)),
    onDecrease: (id) => dispatch(bookRemovedFromCart(id)),
    onDelete: (id) => dispatch(allBooksRemovedFromCart(id))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCartTable);