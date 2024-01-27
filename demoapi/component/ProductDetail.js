import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import { useCart } from './CartContext';
// import { addToCartAPI } from './CartContext';

const ProductDetailScreen = ({ route, productId }) => {
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  // //cart
  // const onCart = () => {
  //   addToCartAPI(productId);
  // };


  //giohang
  const handleAddToCart = () => {
    addToCart(product);
  };


  //quay lai
  const onBack = () => {
    navigation.navigate("trangchu");
  }

  useEffect(() => {
    // Lấy id sản phẩm từ tham số đường dẫn
    const productId = route.params.productId;

    // Gọi API để lấy chi tiết sản phẩm
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [route.params.productId]);

  // Hiển thị thông tin chi tiết sản phẩm
  return (
    <View>
      <Header />
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity style={styles.filBtn} onPress={onBack}>
            <Text style={{ color: 'white' }} >Quay lại</Text>
          </TouchableOpacity>
          {product ? (
            <View>
              <Image
                style={{
                  width: '100%',
                  height: 400,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  resizeMode: 'contain',
                }}
                source={{ uri: `${product.image}` }}
              />
              <Text>{product.title}</Text>
              <Text>{product.price}</Text>
              <Text>{product.description}</Text>
              <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
                <Text style={styles.loginText} >Add</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </ScrollView>
      </SafeAreaView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    width: '30%',
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "green",
    marginBottom: 15
  },
  filBtn: {
    width: '24%',
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "black",
    marginBottom: 15
  }
})

export default ProductDetailScreen;
