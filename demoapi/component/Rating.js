import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from './header';
import Footer from './footer';

const Rating = () => {
  const [products, setProducts] = useState([]);

  //Chi tiet
  const onDetail = (id) => {
    // Chuyển hướng tới màn hình chi tiết sản phẩm và truyền productId
    navigation.navigate('chitiet', { id });
  };

  //quay lai
  const onBack = () => {
    navigation.navigate("trangchu");
  }

  //giohang
  const onCart = () => {
    navigation.navigate("giohang");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const sortedProducts = response.data.sort((a, b) => b.rating.rate - a.rating.rate);
        setProducts(sortedProducts);
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, marginVertical: 8, marginHorizontal: 16, backgroundColor: 'white' }}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
      <Text style={{fontWeight:'bold'}}>{item.title}</Text>
      <Text style={{fontWeight:'bold'}}>{item.price}</Text>
      <Text style={{fontWeight:'bold', color:'red'}}>Rating: {item.rating.rate} ({item.rating.count} reviews)</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.detailBtn} onPress={() => navigation.navigate('chitiet', { productId: item.id })}>
          <Text style={styles.loginText} >Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn} onPress={onCart}>
          <Text style={styles.loginText} >Add</Text>
        </TouchableOpacity>
      </View>
      {/* Add more product details as needed */}
    </View>
  );

  return (
    <View>
      <Header/>
      <TouchableOpacity style={styles.filBtn} onPress={onBack}>
        <Text style={{ color: 'white' }} >Quay lại</Text>
      </TouchableOpacity>
      <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, alignContent:'center'}}>Danh sách sản phẩm theo đánh giá</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  detailBtn: {
    width: '30%',
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "yellow",
    marginBottom: 15
  },
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

export default Rating;
