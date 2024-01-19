import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Text,
    FlatList,
    StatusBar
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Header from './header';
import Footer from './footer';

const HomeScreem = () => {
    const navigation = useNavigation();
    // //Logout
    // const onLogout = () => {
    //     navigation.navigate("Login");
    // }
    //Chi tiet
    const onDetail = () => {
        navigation.navigate("chitiet");
    }

    //Call API
    const [data, setData] = useState(null);

    const getDataUsingSimpleGetCall = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(function (response) {
                // handle success
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                console.log('Finally called');
            });

    };

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    padding: 10,
                    width: '70%',
                    height: 500,
                    justifyContent: 'center',
                    marginVertical: 8,
                    marginHorizontal: 16,
                    backgroundColor: 'white',
                }}>
                <Image
                    style={{
                        width: '100%',
                        height: 400,
                        justifyContent: 'center',
                        flexDirection: 'column',
                        resizeMode: 'contain',
                    }}
                    source={{ uri: `${item.image}` }}
                />
                <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.id}</Text>
                <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.title}</Text>
                <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.price}</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                    <Text style={styles.loginText} >Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 10 }}>
                Tất cả sản phẩm
            </Text>
            {/*Running GET Request*/}
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={getDataUsingSimpleGetCall}>
                <Text>Tất cả sản phẩm</Text>
            </TouchableOpacity>
            <SafeAreaView
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView>
                    <Header />
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <Footer />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 16,
    },
    item: {
        width: '45%',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        marginTop: 16,
    },
    content: {
        width: 1000,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 40
    },
    box: {
        width: 350,
        height: 350,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#333',
        marginBottom: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    loginBtn: {
        width: '30%',
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "yellow",
        marginBottom: 15
    },
});

export default HomeScreem;