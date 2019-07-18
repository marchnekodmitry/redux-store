import React from 'react';

import ShopHeader from '../shop-header';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <React.Fragment>
      <ShopHeader numItems={5} totalPrice={210}/>
      <BookList />
      <ShoppingCartTable />
    </React.Fragment>
  )
};

export default HomePage;