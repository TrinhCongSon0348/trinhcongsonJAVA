import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    width:107,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
