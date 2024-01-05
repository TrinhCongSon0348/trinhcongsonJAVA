import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Header() {
  //Logout
  const navigation = useNavigation();
  const onCart = () => {
    navigation.navigate("CartDetail");
  }
  return (
    <View style={styles.header}>
      <Text>Header</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onCart}>
        <Text>Giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 70,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'pink'
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});
