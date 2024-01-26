// CartContext.js
import axios from 'axios';
import { useCart } from './CartContext';

const addToCartAPI = async (productId) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/products', {
      productId,
      // quantity,
    });
    // Xử lý phản hồi từ API nếu cần
    console.log('Product added to cart:', response.data);
  } catch (error) {
    console.error('Error adding product to cart:', error);
  }
};

export { addToCartAPI, useCart};

//CartContext.js
// import React, { createContext, useContext, useReducer } from 'react';
// import axios from 'axios';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return { ...state, cartItems: [...state.cartItems, action.payload] };
//     default:
//       return state;
//   }
// };

// const CartProvider = ({ children }) => {
//   const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

//   const addToCart = async (productId) => {
//     try {
//       const response = await axios.post('https://fakestoreapi.com/products', {
//         productId,
//         // other necessary data
//       });

//       dispatch({ type: 'ADD_TO_CART', payload: response.data });
//     } catch (error) {
//       console.error('Error adding product to cart:', error);
//     }
//   };

//   const value = {
//     cartState,
//     addToCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export { CartProvider, useCart };

