// ProductList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ListCategory = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products?category=${category}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  return (
    <View>
      <Text>Product List for {category}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>

          </View>
        )}
      />
    </View>
  );
};

export default ListCategory;



