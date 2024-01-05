import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
// import axios from 'axios';
// import { useState } from 'react';

const Cart = () => {
    //Call API
    // const [data, setData] = useState(null);

    // const getDataUsingSimpleGetCall = () => {
    //     axios
    //         .get('https://fakestoreapi.com/products')
    //         .then(function (response) {
    //             // handle success
    //             setData(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             alert(error.message);
    //         })
    //         .finally(function () {
    //             // always executed
    //             console.log('Finally called');
    //         });

    // };

    // const renderItem = ({ item }) => {
    //     return (
    //         <View
    //             style={{
    //                 padding: 10,
    //                 width: '70%',
    //                 height: 500,
    //                 justifyContent: 'center',
    //                 marginVertical: 8,
    //                 marginHorizontal: 16,
    //                 backgroundColor: 'blue',
    //             }}>
    //             <Image
    //                 style={{
    //                     width: '100%',
    //                     height: 400,
    //                     justifyContent: 'center',
    //                     flexDirection: 'column',
    //                     resizeMode: 'contain',
    //                 }}
    //                 source={{
    //                     uri:
    //                         'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    //                 }}
    //             />

    //             <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.id}</Text>
    //             <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.title}</Text>
    //             <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.price}</Text>
    //             <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.description}</Text>
    //         </View>
    //     );
    // }
    return (
        <View style={styles.container}>
            <View style={[styles.header]}></View>
            <Text>Cart</Text>
            <View style={[styles.footer]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 16,
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '100%',
        marginTop: 16,
    },
});

export default Cart;