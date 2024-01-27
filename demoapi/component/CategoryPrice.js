import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const CategoryPrice = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch products based on price range
    const handleFilterByPrice = async (minPrice, maxPrice) => {
        try {
            setLoading(true);

            // Make a GET request to the API with the specified price range
            const response = await axios.get(`https://fakestoreapi.com/products?price_gte=${minPrice}&price_lte=${maxPrice}`);

            // Update the component state with the filtered products
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching filtered products:', error);
        } finally {
            setLoading(false);
        }
    };

    //Function to fetch all products
    const fetchAllProducts = async () => {
        try {
            setLoading(true);

            // Make a GET request to fetch all products
            const response = await axios.get('https://fakestoreapi.com/products');

            // Update the component state with all products
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching all products:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch all products when the component mounts
    useEffect(() => {
        fetchAllProducts();
    }, []);

    // Example UI for filtering by price
    return (
        <View>
            <TouchableOpacity onPress={() => handleFilterByPrice(10, 50)}>
                <Text>Filter by Price: $10 - $50</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleFilterByPrice(100, 800)}>
                <Text>Filter by Price: $50 - $100</Text>
            </TouchableOpacity>

            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.productItem}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: 400,
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    resizeMode: 'contain',
                                }}
                                source={{ uri: `${item.image}` }}
                            />
                            <Text>{item.title}</Text>
                            <Text>{item.price.toFixed(2)}$</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    productItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default CategoryPrice;







