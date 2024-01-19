import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from './header';

export default function RegisterSreem() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [npassword, setNPassword] = useState('');
    const [name, setName] = useState('');

    const onRegister = () => {
        navigation.navigate("Login");
    }
    const onLogin = () => {
        navigation.navigate("Login");
    }
    return (
        <View style={styles.home}>
            <Header/>
            <StatusBar style="auto" />
            <Image source={{ uri: 'https://logodix.com/logo/1713924.png' }} style={{ width: 300, height: 300 }} />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(name) => setName(name)}
                />
            </View>
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
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Nhap lai Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(npassword) => setNPassword(npassword)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
                <Text style={styles.loginText} >LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={onRegister}>
                <Text style={styles.loginText} >REGISTER</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:300
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
});
