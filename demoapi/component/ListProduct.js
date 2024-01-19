import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ListProduct = () => {
    const navigation = useNavigation();
    //Chi tiet
    const onDetail = () => {
        navigation.navigate("Detail");
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={styles.sale}>
                        <Text style={{ color: 'red' }}>Giam 30%</Text>
                    </View>
                    <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.2j4mIgjpPFFJIEvSGViAIwHaHY&pid=Api&P=0&w=300&h=300' }} style={{ width: '100%', height: 150 }} />
                    <View style={styles.dess}>
                        <Text style={styles.dess_text}>Lampoghini</Text>
                    </View>
                    <View style={styles.ha}>
                        <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                            <Text style={styles.loginText} >Chi tiet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                            <Text style={styles.loginText} >ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.sale}>
                        <Text style={{ color: 'red' }}>Giam 30%</Text>
                    </View>
                    <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.2j4mIgjpPFFJIEvSGViAIwHaHY&pid=Api&P=0&w=300&h=300' }} style={{ width: '100%', height: 150 }} />
                    <View style={styles.dess}>
                        <Text style={styles.dess_text}>Lampoghini</Text>
                    </View>
                    <View style={styles.ha}>
                        <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                            <Text style={styles.loginText} >Chi tiet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                            <Text style={styles.loginText} >ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.sale}>
                        <Text style={{ color: 'red' }}>Giam 30%</Text>
                    </View>
                    <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.2j4mIgjpPFFJIEvSGViAIwHaHY&pid=Api&P=0&w=300&h=300' }} style={{ width: '100%', height: 150 }} />
                    <View style={styles.dess}>
                        <Text style={styles.dess_text}>Lampoghini</Text>
                    </View>
                    <View style={styles.ha}>
                        <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                            <Text style={styles.loginText} >Chi tiet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                            <Text style={styles.loginText} >ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.sale}>
                        <Text style={{ color: 'red' }}>Giam 30%</Text>
                    </View>
                    <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.2j4mIgjpPFFJIEvSGViAIwHaHY&pid=Api&P=0&w=300&h=300' }} style={{ width: '100%', height: 150 }} />
                    <View style={styles.dess}>
                        <Text style={styles.dess_text}>Lampoghini</Text>
                    </View>
                    <View style={styles.ha}>
                        <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                            <Text style={styles.loginText} >Chi tiet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
                            <Text style={styles.loginText} >ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    item: {
        width: '45%',
        justifyContent: 'space-between'
    },
    dess: {
        backgroundColor: 'black',
        paddingVertical: 8
    },
    dess_text: {
        color: 'white',
        textAlign: 'center'
    },
    sale: {
        backgroundColor: 'yellow',
        width: 70,
        height: 35,
        position: 'absolute',
        top: 10,
        zIndex: 1000,
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 150
    },
    loginBtn: {
        width: "30%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
        marginTop: 10
    },
    ha: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ListProduct;