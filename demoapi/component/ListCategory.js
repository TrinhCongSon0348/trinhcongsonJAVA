import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ListCategory = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.gBkNLEhQWnH4ejVabR9CMQHaFb&pid=Api&P=0&h=180' }} style={{ width: 100, height: 100 }} />
                </View>
                <View style={styles.item}><Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.eLYgURcd6KGt7iZ4f5o9uwHaE8&pid=Api&P=0&h=180' }} style={{ width: 100, height: 100 }} /></View>
                <View style={styles.item}><Image source={{ uri: 'https://asb.com.vn/wp-content/uploads/2021/03/tim-hieu-logo-sieu-xe-bugatti-bugatti-logo-4.jpg' }} style={{ width: 100, height: 100 }} /></View>
                <View style={styles.item}><Image source={{ uri: 'https://tinbanxe.vn/uploads/news/2020_08/1-8/logo-cac-hang-xe/cadillac.jpg' }} style={{ width: 100, height: 100 }} /></View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        width: '20%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
        overflow: 'hidden'
    }

})

export default ListCategory;