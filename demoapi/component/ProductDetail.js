import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

const ProductDetail = () => {
    //Call API
    const [data, setData] = useState(null);

    const getDataUsingSimpleGetCall = (id) => {
        axios
            .get('https://fakestoreapi.com/products/'+id)
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
                <Text style={{ fontSize: 13, fontStyle: 'italic', justifyContent: 'center' }}>{item.description}</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text>Chi tiết sản phẩm</Text>
            <TouchableOpacity
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
    header: {
        height: 70,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'pink',
        zIndex: 10
    },
    footer: {
        height: 70,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'yellow'
    },
});

export default ProductDetail;