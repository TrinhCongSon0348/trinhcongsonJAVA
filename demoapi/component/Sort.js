import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from './header';
import Footer from './footer';

const Sort = () => {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('asc');

    //quay lai
    const onBack = () => {
        navigation.navigate("trangchu");
    }

    const onCart = () => {
        navigation.navigate("giohang");
    }


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


    const sortProductsByPrice = (products, sortOrder) => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        });
        return sortedProducts;
    };


    const fetchProductsData = async () => {
        try {
            const productsData = await fetchProducts();
            // Sắp xếp danh sách sản phẩm khi lấy được dữ liệu
            const sortedProducts = sortProductsByPrice(productsData, sortBy);
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
        const sortedProducts = sortProductsByPrice(products, newSortOrder);
        setProducts(sortedProducts);
    };

    return (
        <View style={{ backgroundColor: 'white', justifyContent: 'space-between' }}>
            <Header />
            <TouchableOpacity style={styles.filBtn} onPress={onBack}>
                <Text style={{ color: 'white' }} >Quay lại</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Sắp xếp sản phẩm theo giá bán</Text>
                <TouchableOpacity onPress={toggleSortOrder} style={{ color: 'black', width: 170, height: 30, marginLeft: 10, backgroundColor: 'orange', alignContent: 'center', borderRadius: 10, marginBottom: 5 }}>
                    <Text>Sắp xếp theo giá {sortBy === 'asc' ? 'tăng dần' : 'tăng dần'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleSortOrder} style={{ color: 'black', width: 170, height: 30, marginLeft: 10, backgroundColor: 'yellow', alignContent: 'center', borderRadius: 10 }}>
                    <Text>Sắp xếp theo giá {sortBy === 'desc' ? 'Giảm dần' : 'giảm dần'}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <View>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                justifyContent: 'center',
                                flexDirection: 'row',
                                resizeMode: 'contain',
                            }}
                            source={{ uri: `${item.image}` }}
                        />
                        <Text style={{ fontWeight: 'bold' }}>Tên sản phẩm{item.title}</Text>
                        <Text style={{ fontWeight: 'bold', color: 'red' }}>Giá: {item.price}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.detailBtn} onPress={() => navigation.navigate('chitiet', { productId: item.id })}>
                                <Text style={styles.loginText} >Detail</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addBtn} onPress={onCart}>
                                <Text style={styles.loginText} >Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    detailBtn: {
        width: '20%',
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "yellow",
        marginBottom: 15
      },
      addBtn: {
        width: '20%',
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

export default Sort;
