// // CartContext.js
// import axios from 'axios';
// import { useCart } from './CartContext';
// import { CartProvider } from './CartContext';

// const addToCartAPI = async (productId, quantity) => {
//   try {
//     const response = await axios.post('https://fakestoreapi.com/products', {
//       productId,
//       quantity, // Include quantity if needed
//     });
//     console.log('Product added to cart:', response.data);
//   } catch (error) {
//     console.error('Error adding product to cart:', error);
//   }
// };


// export { addToCartAPI, useCart, CartProvider};






// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Implement logic to add items to the cart
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    // Add more cases for other actions (e.g., remove from cart)
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const value = {
    cartState,
    addToCart,
    // Add more functions if needed (e.g., remove from cart)
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
