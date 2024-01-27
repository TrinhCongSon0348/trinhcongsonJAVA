import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/LoginScreem';
import Register from './component/RegisterScreem';
import Payment from './component/Payment';
import HomeScreem from './component/home';
import ProductDetailScreen from './component/ProductDetail';
import CartScreen from './component/Cart';
import ListCategory from './component/ListCategory';
import ProductFilter from './component/ProductFilter';
import Rating from './component/Rating';
import CategoryPrice from './component/CategoryPrice';
import CommentScreen from './component/Comment';
import { CartProvider } from './component/CartContext';
import Sort from './component/Sort';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <CartProvider>
          <Stack.Navigator initialRouteName='trangchu' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='trangchu' component={HomeScreem} />
            <Stack.Screen name='chitiet' component={ProductDetailScreen} />
            <Stack.Screen name='dangnhap' component={Login} />
            <Stack.Screen name='dangky' component={Register} />
            <Stack.Screen name="giohang" component={CartScreen} />
            <Stack.Screen name='thanhtoan' component={Payment} />
            <Stack.Screen name='danhmuc' component={ListCategory} />
            <Stack.Screen name='loc' component={ProductFilter} />
            <Stack.Screen name='danhgia' component={Rating} />
            <Stack.Screen name='giaban' component={CategoryPrice} />
            <Stack.Screen name='binhluan' component={CommentScreen} />
            <Stack.Screen name='sapxep' component={Sort} />
          </Stack.Navigator>
        </CartProvider>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;



// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
// import axios from 'axios';

// const CategoryPrice = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');

//     // Function to fetch products based on price range
//     const handleFilterByPrice = async () => {
//         try {
//             setLoading(true);

//             // Make a GET request to the API with the specified price range
//             const response = await axios.get(`https://fakestoreapi.com/products?price_gte=${minPrice}&price_lte=${maxPrice}`);

//             // Update the component state with the filtered products
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching filtered products:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // // Function to fetch all products
//     // const fetchAllProducts = async () => {
//     //     try {
//     //         setLoading(true);

//     //         // Make a GET request to fetch all products
//     //         const response = await axios.get('https://fakestoreapi.com/products');

//     //         // Update the component state with all products
//     //         setProducts(response.data);
//     //     } catch (error) {
//     //         console.error('Error fetching all products:', error);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     // // Fetch all products when the component mounts
//     // useEffect(() => {
//     //     fetchAllProducts();
//     // }, []);

//     // Example UI for filtering by price
//     return (
//         <View>
//             <View style={styles.filterContainer}>
//                 <Text>Min Price:</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter min price"
//                     keyboardType="numeric"
//                     value={minPrice}
//                     onChangeText={(text) => setMinPrice(text)}
//                 />

//                 <Text>Max Price:</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter max price"
//                     keyboardType="numeric"
//                     value={maxPrice}
//                     onChangeText={(text) => setMaxPrice(text)}
//                 />

//                 <TouchableOpacity onPress={handleFilterByPrice}>
//                     <Text>Filter</Text>
//                 </TouchableOpacity>
//             </View>

//             {loading ? (
//                 <Text>Loading...</Text>
//             ) : (
//                 <FlatList
//                     data={products}
//                     keyExtractor={(item) => item.id.toString()}
//                     renderItem={({ item }) => (
//                         <View style={styles.productItem}>
//                             <Image
//                                 style={{
//                                     width: '100%',
//                                     height: 400,
//                                     justifyContent: 'center',
//                                     flexDirection: 'row',
//                                     resizeMode: 'contain',
//                                 }}
//                                 source={{ uri: `${item.image}` }}
//                             />
//                             <Text>{item.title}</Text>
//                             <Text>{item.price.toFixed(2)}$</Text>
//                         </View>
//                     )}
//                 />
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     filterContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 5,
//         marginHorizontal: 5,
//         width: 80,
//     },
//     productItem: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
// });

// export default CategoryPrice;
















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

