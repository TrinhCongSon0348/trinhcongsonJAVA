// CartScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { useCart } from './CartContext';

const CartScreen = () => {
  const { cartItems } = useCart();

  return (
    <View>
      <Text>Cart Items:</Text>
      {/* {cartItems.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
        </View>
      ))} */}
	  {cartItems ? (
        cartItems.map((item) => (
          <View key={item.id}>
            <Text>{item.id}</Text>
			<Text>{item.title}</Text>
          </View>
        ))
      ) : (
        <Text>Your cart is empty.</Text>
      )}
    </View>
  );
};

export default CartScreen;
