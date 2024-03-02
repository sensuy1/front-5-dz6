import products from '../data/products.json';

const initialState = {
  products,
  cartItems: []
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const productId = action.payload;
        const productToAdd = state.products.find(product => product._id === productId);
        return {
          ...state,
          cartItems: [...state.cartItems, productToAdd]
        };
      default:
        return state
    }
  };
  

export const addToCart = (productId) => {
    return {
      type: 'ADD_TO_CART',
      payload: productId
    };
  };
