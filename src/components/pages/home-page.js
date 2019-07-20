import React from 'react';

import ShopHeader from '../shop-header';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <React.Fragment>
      <ShopHeader />
      <BookList />
      <ShoppingCartTable />
    </React.Fragment>
  )
};

export default HomePage;