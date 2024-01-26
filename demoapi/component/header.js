import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Header() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  //Chi tiet
  const onDetail = (id) => {
    // Chuyển hướng tới màn hình chi tiết sản phẩm và truyền productId
    navigation.navigate('chitiet', { id });
  };
  //Gio hang
  const onCart = () => {
    navigation.navigate("giohang");
  }
  const onLogin = () => {
    navigation.navigate("dangnhap");
  }
  //Tim kiem
  const handleSearch = (text) => {
    setSearchTerm(text);
  };
  //Loc san pham
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩm
    const fetchProductList = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    fetchProductList();
  }, []);


  return (
    <View
      start={{ x: 0.999999940395352, y: -1.0691202390056276e-7 }}
      end={{ x: -2.980232394200755e-8, y: 0.9999999465439879 }}
      colors={["#131313", "#303030"]}
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 31,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: "https://phuongnam24h.com/img_data/images/cac-mau-logo-shop-quan-ao-thoi-trang-dep-va-tinh-te.jpg" }}
          resizeMode={"stretch"}
          style={{
            width: 100,
            height: 70,
            marginTop: 10,
            marginBottom: 10,
            marginRight: '27%',
          }}
        />
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity onPress={onLogin}>
            <View style={{ borderRadius: 10, width: 100, height: 20, backgroundColor: 'black', marginTop: 10, marginLeft: 40 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Login/Logout</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCart}>
            <Image
              source={{ uri: "http://cdn.onlinewebfonts.com/svg/img_297653.png" }}
              resizeMode={"stretch"}
              style={{
                width: 30,
                height: 30,
                marginBottom: 5,
                marginLeft: 100,
                marginTop: 5
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "black",
          borderRadius: 16,
          paddingVertical: 4,
          paddingLeft: 16,
          paddingRight: 4,
          marginRight: 30,
        }}>
        {/* Tim kiem */}
        <View style={{ flexDirection: 'column' }}>
          <Image
            source={{ uri: "https://static.vecteezy.com/system/resources/previews/000/631/501/original/search-icon-symbol-sign-vector.jpg" }}
            resizeMode={"stretch"}
            style={{
              width: 20,
              height: 20,
              marginRight: 12,
            }}
          />
          <TextInput
            style={{ color: 'white', height: 40, width: 300, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
            placeholder="Search products"
            onChangeText={handleSearch}
          />
          {searchTerm.length > 0 ? (
            <FlatList
              data={filteredProducts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('chitiet', { productId: item.id })}
                >
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
                  <Text style={{ color: 'white', fontWeight:'bold'}}>{item.title}</Text>
                  <Text style={{ color: 'white', fontWeight:'bold'}}>{item.price}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.detailBtn} onPress={() => navigation.navigate('chitiet', { productId: item.id })}>
                      <Text style={styles.loginText} >Detail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addBtn} onPress={onCart}>
                      <Text style={styles.loginText} >Add</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            />) : (
            <Text style={{ color: 'white' }}>Hay nhap tu khoa tim kiem</Text>
          )}
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  loginBtn: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#33FFCC",
    marginBottom: 5,
    marginLeft: 150
  },
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
});
