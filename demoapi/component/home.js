import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
} from 'react-native';
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header]}></View>
                <ScrollView>
                    <View style={[styles.content]}>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 100, height: 100 }} />
                        </View>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 100, height: 100 }} />
                        </View>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 100, height: 100 }} />
                        </View>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 100, height: 100 }} />
                        </View>
                        <View style={[styles.box]}>
                            <Image source={{ uri: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202012161146206471.jpg' }} style={{ width: 100, height: 100 }} />
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.footer]}></View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width:1000,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    header: {
        height: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#03A9F4',
        zIndex: 10
    },
    content: {
        width:1000,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 40
    },
    footer: {
        height: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#8BC34A'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#333',
        marginBottom: 10,
        marginVertical:10,
        marginHorizontal:10,
    }
});      