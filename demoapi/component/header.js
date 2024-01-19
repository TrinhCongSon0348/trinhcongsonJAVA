// import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  //Gio hang
  const onCart = () => {
    navigation.navigate("giohang");
  }
  const onLogin = () => {
    navigation.navigate("dangnhap");
  }

  return (
    // <View style={styles.header}>
    //   <View>
    //     <Text style={styles.title}>SUPPER CAR</Text>
    //   </View>
    //   <View>
    //     <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP._SF7-RggJUE5HKySvozapgHaHa&pid=Api&P=0&h=180' }} style={{ width: 50, height: 50 }} />
    //   </View>
    //   {/* <TouchableOpacity
    //     style={styles.buttonStyle}
    //     onPress={onCart}>
    //     <Text>Giỏ hàng</Text>
    //   </TouchableOpacity> */}
    // </View>

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
          source={{ uri: "https://banner2.cleanpng.com/20180710/hev/kisspng-fast-food-junk-food-cuisine-logo-brand-5b45397f22d258.9777016815312633591426.jpg" }}
          resizeMode={"stretch"}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginBottom: 10,
            marginRight: '27%',
          }}
        />
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity onPress={onLogin}>
            <View style={{ borderRadius: 10, width: 100, height: 20, backgroundColor: 'black', marginTop:10, marginLeft:90}}>
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
                marginLeft: 155,
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
          backgroundColor: "#303030",
          borderRadius: 16,
          paddingVertical: 4,
          paddingLeft: 16,
          paddingRight: 4,
          marginRight: 30,
        }}>
        <Image
          source={{ uri: "https://static.vecteezy.com/system/resources/previews/000/631/501/original/search-icon-symbol-sign-vector.jpg" }}
          resizeMode={"stretch"}
          style={{
            width: 20,
            height: 20,
            marginRight: 12,
          }}
        />
        <Text
          style={{
            color: "#979797",
            fontSize: 14,
          }}>
          {"Search coffee"}
        </Text>
        {/*Filter*/}
        {/* <View
								style={{
									flex: 1,
									alignSelf: "stretch",
								}}>
							</View>
							<View
								style={{
									width: 40,
									height: 27,
									backgroundColor: "white",
									borderRadius: 12,
									paddingHorizontal: 12,
								}}>
							</View> */}
      </View>
    </View>
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
  // buttonStyle: {
  //   alignItems: 'center',
  //   backgroundColor: '#DDDDDD',
  //   padding: 10,
  //   width: '100%',
  //   marginTop: 16,
  // },
  // title: {
  //   color: 'red',
  //   fontWeight: '700',
  //   fontSize: 16,
  //   textTransform: 'uppercase'
  // }
});
