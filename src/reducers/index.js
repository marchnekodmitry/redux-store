
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  numItems: 0,
  orderTotal: 0
};

const updateOrderTotal = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.total, 0);
};

const updateNumItems = (cartItems) => {
  return cartItems.reduce((count, item) => count + item.count, 0);
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if (idx === -1) {
    return [
        ...cartItems,
        item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0
  } = item;

  return {
    id,
    count: count + quantity,
    title,
    total: total + book.price * quantity
  };
};

const changeOrder = (state, action, quantity) => {
  const bookId = action.payload;
  const book = state.books.find((book) => book.id === bookId);
  const itemIndex = state.cartItems.findIndex((item) => item.id === bookId);
  const item = state.cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);
  const newCartItems = updateCartItems(state.cartItems, newItem, itemIndex);
  return {
    ...state,
    orderTotal: updateOrderTotal(newCartItems),
    cartItems: newCartItems,
    numItems: updateNumItems(newCartItems)
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case 'BOOK_ADDED_TO_CART':
      return changeOrder(state, action, 1);
    case 'BOOK_REMOVED_FROM_CART':
      return changeOrder(state, action, -1);
    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.cartItems.find((item) => item.id === action.payload);
      return changeOrder(state, action, -item.count);
    default:
      return state;
  }
};

export default reducer;