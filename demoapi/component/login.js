import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreem() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        navigation.navigate("Home");
    }
    return (
        <View style={styles.home}>
             <View style={[styles.header]}></View>
            <Text>LOGIN</Text>
            <StatusBar style="auto" />
            <Image source={{ uri: 'https://freetuts.net/public/logo/logo.png' }} style={{ width: 318, height: 40 }} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
                <Text style={styles.loginText} >LOGIN</Text>
            </TouchableOpacity>
            <View style={[styles.footer]}></View>
        </View>


    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputView: {

        backgroundColor: "#C0C0C0",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "blue",
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
