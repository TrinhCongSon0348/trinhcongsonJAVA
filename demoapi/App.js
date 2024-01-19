// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import React from 'react';
import { StyleSheet, View } from 'react-native';
// import React in our code.
// import { StyleSheet, View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
//import all the components we are going to use.
// import axios from 'axios';
// import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreem from './component/login';
// import HomeScreem from './component/home';
// import RegisterSreem from './component/register';
import ProductDetail from './component/ProductDetail';
import Onboarding from './component/Onboarding';
import Home from './component/HomeScreem';
import DetailItem from './component/DetailItem';
import Login from './component/LoginScreem';
import Register from './component/RegisterScreem';
import Payment from './component/Payment';
import Cart from './component/Cart';


const Stack = createNativeStackNavigator();

const App = () => {

  // const [data, setData] = useState(null);

  // const getDataUsingSimpleGetCall = () => {
  //   axios
  //     .get('https://fakestoreapi.com/products')
  //     .then(function (response) {
  //       // handle success
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       alert(error.message);
  //     })
  //     .finally(function () {
  //       // always executed
  //       console.log('Finally called');
  //     });

  // };

  // const renderItem = ({ item }) => {
  //   return (
  //     <View
  //       style={{
  //         padding: 10,
  //         width: 500,
  //         height: 700,
  //         marginVertical: 8,
  //         marginHorizontal: 16,
  //         backgroundColor: 'pink',
  //       }}>
  //       <Image
  //         style={{
  //           width: 400,
  //           height: 600,
  //           resizeMode: 'contain',
  //         }}
  //         source={{
  //           uri:
  //             'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //         }}
  //       />

  //       <Text style={{ fontSize: 18, fontStyle: 'italic' }}>{item.id}</Text>
  //       <Text style={{ fontSize: 18, fontStyle: 'italic' }}>{item.title}</Text>
  //       <Text style={{ fontSize: 18, fontStyle: 'italic' }}>{item.price}</Text>
  //     </View>
  //   );
  // }

  return (
    // <View style={styles.container}>
    //   <Text style={{ fontSize: 30, textAlign: 'center' }}>
    //     Example of Axios Networking in React Native
    //   </Text>
    //   {/*Running GET Request*/}
    //   <TouchableOpacity
    //     style={styles.buttonStyle}
    //     onPress={getDataUsingSimpleGetCall}>
    //     <Text>Simple Get Call</Text>
    //   </TouchableOpacity>
    //   <SafeAreaView
    //     style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <FlatList
    //       data={data}
    //       renderItem={renderItem}
    //       keyExtractor={item => item.id}
    //     />
    //   </SafeAreaView>
    // </View>
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='dangnhap' screenOptions={{headerShown: false}}>
          <Stack.Screen name='dangnhap' component={Login} />
          <Stack.Screen name='dangky' component={Register} />
          <Stack.Screen name='chitiet' component={DetailItem} />
          <Stack.Screen name='trangchu' component={Home} />
          <Stack.Screen name='main' component={Onboarding} />
          <Stack.Screen name='giohang' component={Cart} />
          <Stack.Screen name='thanhtoan' component={Payment} />
          {/* <Stack.Screen name='Register' component={RegisterSreem} />
          <Stack.Screen name='Login' component={LoginScreem} />
          <Stack.Screen name='Home' component={HomeScreem} /> */}
          <Stack.Screen name='Detail' component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;

