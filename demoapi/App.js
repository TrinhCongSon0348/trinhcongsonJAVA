import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/LoginScreem';
import Register from './component/RegisterScreem';
import Payment from './component/Payment';
import HomeScreem from './component/home';
import ProductDetailScreen from './component/ProductDetail';
import CartScreen from './component/Cart';
import ListCategory from './component/ListCategory';
import ProductFilter from './component/ProductFilter';
import Rating from './component/Rating';

const Stack = createNativeStackNavigator();

const App = () => {
  //danh muc
  // const [currentCategory, setCurrentCategory] = useState('electronics'); // Set default category

  // const changeCategory = (newCategory) => {
  //   setCurrentCategory(newCategory);
  // };
  return (

    <View style={styles.container}>
      {/* <View>
        <Button title="Electronics" onPress={() => changeCategory('electronics')} />
        <Button title="Clothing" onPress={() => changeCategory('clothing')} />
        <ListCategory category={currentCategory} />
      </View> */}
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName='trangchu' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='trangchu' component={HomeScreem} />
          <Stack.Screen name='chitiet' component={ProductDetailScreen} />
          <Stack.Screen name='dangnhap' component={Login} />
          <Stack.Screen name='dangky' component={Register} />
          <Stack.Screen name="giohang" component={CartScreen} />
          <Stack.Screen name='thanhtoan' component={Payment} />
          <Stack.Screen name='danhmuc' component={ListCategory} />
          <Stack.Screen name='loc' component={ProductFilter} />
          <Stack.Screen name='danhgia' component={Rating} />
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
