import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './shopping-cart-table.css';

class ShoppingCartTable extends Component {

  render() {
    return (
        <div className='shopping-cart-table'>
          <h2>Your Order</h2>
          <table className='table'>
            <thead>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th className='table-buttons-header'>Action</th>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Learning JavaScript</td>
              <td>2</td>
              <td>32$</td>
              <td className='table-buttons'>
                <button className='btn btn-outline-danger btn-sm'>
                  <FontAwesomeIcon icon={faTrash}/>
                </button>
                <button className='btn btn-outline-success btn-sm'>
                  <FontAwesomeIcon icon={faPlusCircle}/>
                </button>
                <button className='btn btn-outline-warning btn-sm'>
                  <FontAwesomeIcon icon={faMinusCircle}/>
                </button>
              </td>
            </tr>
            </tbody>
          </table>

          <div className='total'>
            Total: 240$
          </div>
        </div>
    )
  }
}

export default ShoppingCartTable;