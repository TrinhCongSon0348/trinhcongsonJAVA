// ProductFilter.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const ProductFilter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    // Gọi hàm onFilter để chuyển các tham số lọc lên component cha
    onFilter({
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
    });
  };

  return (
    <View>
      <Text>Filter by Price:</Text>
      <TextInput
        placeholder="Min Price"
        keyboardType="numeric"
        value={minPrice}
        onChangeText={(text) => setMinPrice(text)}
      />
      <TextInput
        placeholder="Max Price"
        keyboardType="numeric"
        value={maxPrice}
        onChangeText={(text) => setMaxPrice(text)}
      />
      <Button title="Apply Filter" onPress={handleFilter} />
    </View>
  );
};

export default ProductFilter;
