// import React, { useEffect, useState } from 'react';
// import {
//     StyleSheet,
//     View,
//     ScrollView,
//     Image,
//     SafeAreaView,
//     TouchableOpacity,
//     Text,
//     FlatList,
// } from 'react-native';
// // import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import Header from './header';
// import Footer from './footer';
// import Waiting from './Waiting';

// const HomeScreem = () => {
//     const navigation = useNavigation();

//     //Chi tiet
//     // const onDetail = () => {
//     //     navigation.navigate("chitiet");
//     // }
//     const onDetail = (id) => {
//         // Chuyển hướng tới màn hình chi tiết sản phẩm và truyền productId
//         navigation.navigate('chitiet', { id });
//     };
//     //giohang
//     const onCart = () => {
//         navigation.navigate("giohang");
//     }

//     //Call API
//     const [data, setData] = useState([]);
//     const [load, setLoad] = useState(false);

//     // const getDataUsingSimpleGetCall = () => {
//     //     axios
//     //         .get('https://fakestoreapi.com/products')
//     //         .then(function (response) {
//     //             // handle success
//     //             setData(response.data);
//     //         })
//     //         .catch(function (error) {
//     //             // handle error
//     //             alert(error.message);
//     //         })
//     //         .finally(function () {
//     //             // always executed
//     //             console.log('Finally called');
//     //         });
//     // };

//     const getApi = () => {
//         return fetch('https://fakestoreapi.com/products')
//             .then((respone) => respone.json())
//             .then((data) => setData(data))
//             .catch(err => console.log(err))
//             .finally(
//                 setLoad(false)
//             )
//     }

//     useEffect(() => {
//         getApi();
//     }, []);

//     const renderItem = ({ item }) => {
//         return (
//             <TouchableOpacity onPress={() => onDetail(item.id)}>
//                 <View
//                     style={{
//                         padding: 10,
//                         width: '70%',
//                         height: 500,
//                         justifyContent: 'center',
//                         marginVertical: 8,
//                         marginHorizontal: 16,
//                         backgroundColor: 'white',
//                     }}>
//                     <Image
//                         style={{
//                             width: '100%',
//                             height: 400,
//                             justifyContent: 'center',
//                             flexDirection: 'row',
//                             resizeMode: 'contain',
//                         }}
//                         source={{ uri: `${item.image}` }}
//                     />
//                     <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.id}</Text>
//                     <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.title}</Text>
//                     <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.price}</Text>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                         <TouchableOpacity style={styles.detailBtn} onPress={() => onDetail(item.id)}>
//                             <Text style={styles.loginText} >Detail</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.addBtn} onPress={onCart}>
//                             <Text style={styles.loginText} >Add</Text>
//                         </TouchableOpacity>
//                     </View>

//                 </View>
//             </TouchableOpacity>

//         );
//     }
//     return (
//         <View style={styles.container}>
//             {/* <TouchableOpacity
//                 style={styles.buttonStyle}
//                 onPress={getDataUsingSimpleGetCall}>
//             </TouchableOpacity> */}
//             <SafeAreaView
//                 style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <ScrollView>
//                     <Header />
//                     {load ? (<Waiting />) : (
//                         <FlatList
//                             data={data}
//                             renderItem={renderItem}
//                             keyExtractor={item => item.id}
//                             // keyExtractor={(item) => item.id.toString()}
//                         />
//                     )}
//                     <Footer />
//                 </ScrollView>
//             </SafeAreaView>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         flex: 1,
//         padding: 16,
//     },
//     item: {
//         width: '45%',
//         justifyContent: 'space-between',
//     },
//     buttonStyle: {
//         alignItems: 'center',
//         backgroundColor: 'white',
//         padding: 10,
//         width: 10,
//         height: 10,
//         marginTop: 10,
//         borderRadius: 50
//     },
//     content: {
//         width: 1000,
//         alignItems: 'center',
//         marginTop: 50,
//         marginBottom: 40
//     },
//     box: {
//         width: 350,
//         height: 350,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         backgroundColor: '#333',
//         marginBottom: 10,
//         marginVertical: 10,
//         marginHorizontal: 10,
//     },
//     detailBtn: {
//         width: '30%',
//         borderRadius: 25,
//         height: 30,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 10,
//         backgroundColor: "yellow",
//         marginBottom: 15
//     },
//     addBtn: {
//         width: '30%',
//         borderRadius: 25,
//         height: 30,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 10,
//         backgroundColor: "green",
//         marginBottom: 15
//     },
// });

// export default HomeScreem;

// ////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import axios from 'axios';  // Nếu sử dụng Axios
import Header from './header';
import Footer from './footer';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('asc');

  //Sap xep theo ten san pham
  const sortProductsAlphabetically = (products, sortOrder) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    return sortedProducts;
  };

  const fetchProductsData = async () => {
    try {
      const productsData = await fetchProducts();
      // Sắp xếp danh sách sản phẩm khi lấy được dữ liệu
      const sortedProducts = sortProductsAlphabetically(productsData, sortBy);
      setProducts(sortedProducts);
    } catch (error) {
      console.error('Error fetching products data:', error);
    }
  };

  const toggleSortOrder = () => {
    // Chuyển đổi giữa 'asc' và 'desc' khi người dùng nhấn vào nút sắp xếp
    const newSortOrder = sortBy === 'asc' ? 'desc' : 'asc';
    setSortBy(newSortOrder);
    // Sắp xếp lại danh sách sản phẩm
    const sortedProducts = sortProductsAlphabetically(products, newSortOrder);
    setProducts(sortedProducts);
  };

  //Chi tiet
  const onDetail = (id) => {
    // Chuyển hướng tới màn hình chi tiết sản phẩm và truyền productId
    navigation.navigate('chitiet', { id });
  };

  //giohang
  const onCart = () => {
    navigation.navigate("giohang");
  }


  //danhgia
  const onRate = () => {
    navigation.navigate("danhgia");
  }

  // Sap xep
  const onSort = () => {
    navigation.navigate("sapxep");
  }

  //Danh muc
  const handleFilter = async (category) => {
    try {
      setLoading(true);
      const response = await axios.get('https://fakestoreapi.com/products/category/' + category);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching filtered products:', error);
    } finally {
      setLoading(false);
    }
  };

  // //Loc gia ban
  // const handleFilterByPrice = async (minPrice, maxPrice) => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(`https://fakestoreapi.com/products?price_gte=${minPrice}&price_lte=${maxPrice}`);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching filtered products:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //Danh gia
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

  //Lay tat ca san pham
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

  // Hiển thị danh sách sản phẩm

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView>
        <ScrollView>
          <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>Danh mục sản phẩm</Text>
          {/* Button danh muc */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.filBtn}
              onPress={() => handleFilter("men's clothing")}
            ><Text style={{ color: 'white' }}>Men's Clothing</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.filBtn}
              onPress={() => handleFilter("women's clothing")}
            ><Text style={{ color: 'white' }}>Women's clothing</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.filBtn}
              onPress={() => handleFilter('electronics')}
            ><Text style={{ color: 'white' }}>Electronics</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.filBtn}
              onPress={() => handleFilter('jewelery')}
            ><Text style={{ color: 'white' }}>Jewelery</Text></TouchableOpacity>
          </View>

          {/* Button Loc theo giá */}
          {/* <Button
            title="Filter by Price: $10 - $50"
            onPress={() => handleFilterByPrice(10.5, 50.75)}
          />
          <Button
            title="Filter by Price: $50 - $100"
            onPress={() => handleFilterByPrice(50, 100)}
          /> */}

          <Text style={{ color: 'blue', fontSize: 20, fontWeight: 'bold' }}>Sắp xếp</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* Danh gia */}
            <TouchableOpacity style={styles.filBtn} onPress={onRate}>
              <Text style={{ color: 'white' }}>Đánh giá</Text>
            </TouchableOpacity>
            {/* Sap xep */}
            <TouchableOpacity style={styles.filBtn} onPress={onSort}>
              <Text style={{ color: 'white' }}>Giá bán</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:230}}>
            <TouchableOpacity onPress={toggleSortOrder}>
              <Text style={{fontWeight:'bold'}}>Sắp xếp theo chữ cái {sortBy === 'asc' ? 'A-Z' : 'Z-A'}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SafeAreaView
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('chitiet', { productId: item.id })}>
                    <Text style={{ color: 'white' }}>Đánh giá sản phẩm</Text>
                    <View>
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
                      <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                      <Text style={{ fontWeight: 'bold' }}>{item.price} $</Text>
                      <Text style={{ fontWeight: 'bold', color: 'red' }}>Rating: {item.rating.rate} ({item.rating.count} reviews)</Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.detailBtn} onPress={() => navigation.navigate('chitiet', { productId: item.id })}>
                          <Text style={styles.loginText} >Detail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addBtn} onPress={onCart}>
                          <Text style={styles.loginText} >Add</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </SafeAreaView>
            )}
          />

        </ScrollView>
      </SafeAreaView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
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
  filBtn: {
    width: '24%',
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "black",
    marginBottom: 15
  }
});

export default Home;
