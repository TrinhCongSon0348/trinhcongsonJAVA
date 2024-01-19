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
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';

// export default class HomeScreem extends Component {
const HomeScreem = () => {
    //Logout
    const navigation = useNavigation();
    const onLogout = () => {
        navigation.navigate("Login");
    }
    //Chi tiet
    // const onDetail = () => {
    //     navigation.navigate("Detail");
    // }
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
    //             <TouchableOpacity
    //                 style={styles.buttonStyle}
    //                 onPress={onDetail}>
    //                 <Text>Chi tiết...</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }
    return (
        <View style={styles.container}>
            {/* <View style={[styles.header]}></View> */}
            <Header />
            <ListCategory />
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
                TẤT CẢ SẢN PHẨM
            </Text>
            <ListProduct />
            {/* <ScrollView> */}
            {/* <View style={[styles.content]}>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 350, height: 350 }} />
                        </View>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 350, height: 350 }} />
                        </View>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 350, height: 350 }} />
                        </View>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 350, height: 350 }} />
                        </View>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 350, height: 350 }} />
                        </View>
                    </View> */}

            {/* <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={getDataUsingSimpleGetCall}>
                    <Text>Simple Get Call</Text>
                </TouchableOpacity>
                <SafeAreaView
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
            <StatusBar style="auto" /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 500,
        justifyContent: 'center',
        flex: 1,
        padding: 16,
        marginTop:400
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: '70%',
        marginTop: 16,
    },
    // header: {
    //     height: 70,
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     backgroundColor: 'pink',
    //     zIndex: 10
    // },
    // footer: {
    //     height: 70,
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: 'yellow'
    // },
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
    }
});

export default HomeScreem;