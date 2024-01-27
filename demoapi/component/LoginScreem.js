// import React from "react";
// import { SafeAreaView, View, ScrollView, ImageBackground, Image, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { useState , useEffect} from "react";
// import axios from 'axios';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Login() {
// 	const navigation = useNavigation();
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	// const [token, setToken] = useState(null);
// 	// const [checkEmail, setCheckEmail] = useState(true);
// 	// const [errorPass, setErrorPass] = useState('');

// 	const onRegister = () => {
// 		navigation.navigate("dangky");
// 	}

// 	// const onLogin = () => {
// 	// 	let formData = {
// 	// 		email: email,
// 	// 		password: password,
// 	// 	}
// 	// 	let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// 	// 	if (!regexEmail.test(formData.email)) {
// 	// 		setCheckEmail(false);
// 	// 	}
// 	// 	else {
// 	// 		setCheckEmail(true);
// 	// 	}
// 	// 	formData.password === '' ? setErrorPass('Mat khau rong') : setCheckEmail('')
// 	// }

// 	////////////////////////////////////////////////////////////////////////////////////////////

// 	// const onLogin = () => {
// 	// 	let formData = {
// 	// 		email: email,
// 	// 		password: password,
// 	// 	}
// 	// 	axios.post('https://65ae567f1dfbae409a7497b3.mockapi.io/login', formData)
// 	// 		.then((respone) => {
// 	// 			if (respone.data) {
// 	// 				alert(`Ban da dang nhap thanh cong ${respone.data.email}`);
// 	// 				navigation.navigate("Home");
// 	// 			}
// 	// 		})
// 	// 		.catch((err) => console.log('Dang nhap that bai',err))
// 	// }



// 	// useEffect(() => {
// 	// 	// Kiểm tra xem có token đã lưu trong AsyncStorage hay không khi mở ứng dụng
// 	// 	checkStoredToken();
// 	// }, []);

// 	// const checkStoredToken = async () => {
// 	// 	try {
// 	// 		const storedToken = await AsyncStorage.getItem('userToken');
// 	// 		if (storedToken !== null) {
// 	// 			// Nếu có token đã lưu, cập nhật trạng thái
// 	// 			setToken(storedToken);
// 	// 		}
// 	// 	} catch (error) {
// 	// 		console.error('Error checking stored token:', error);
// 	// 	}
// 	// };



// 	const onLogin = async () => {
// 		try {
// 		  const response = await axios.post('https://65ae567f1dfbae409a7497b3.mockapi.io/login', {
// 			email: email,
// 			password: password,
// 		  });

// 		  if (response.data.success) {
// 			// You can handle the successful login here
// 			alert('Login successful!');
// 			navigation.navigate("trangchu");
// 		  } else {
// 			alert('Login failed', response.data.message);
// 		  }
// 		} catch (error) {
// 		  alert('Error', 'An error occurred during login. Please try again later.');
// 		  console.error('Login error:', error);
// 		}
// 	  };

// 	return (
// 		<SafeAreaView
// 			style={{
// 				flex: 1,
// 				backgroundColor: "#FFFFFF",
// 			}}>
// 			<ScrollView
// 				style={{
// 					flex: 1,
// 					backgroundColor: "#000000",
// 					paddingBottom: -305,
// 				}}>
// 				<ImageBackground
// 					source={{ uri: 'https://png.pngtree.com/back_origin_pic/04/19/29/46cd9531c4ddbdaf61346553c4c875da.jpg' }}
// 					resizeMode={'stretch'}
// 					style={{
// 						paddingTop: 12,
// 						paddingBottom: 215,
// 						paddingRight: 15,
// 						marginHorizontal: 1,
// 					}}
// 				>
// 					<Image
// 						source={{ uri: "https://media1.thehungryjpeg.com/thumbs2/ori_3682048_w9eqsjmyqf1hj7ajbmk6wnco9pjgqdd35q1impxb_blue-phoenix-esport-mascot-logo-design.png" }}
// 						resizeMode={"stretch"}
// 						style={{
// 							width: 200,
// 							height: 200,
// 							marginTop: 10,
// 							marginBottom: 30,
// 							marginLeft: '27%',
// 						}}
// 					/>
// 					<View
// 						style={{
// 							backgroundColor: "#280346B0",
// 							borderRadius: 16,
// 							paddingVertical: 34,
// 							paddingHorizontal: 24,
// 							marginLeft: 15,
// 						}}>
// 						<Text
// 							style={{
// 								color: "#ffffff",
// 								fontSize: 18,
// 								marginBottom: 5,
// 							}}>
// 							{"Email"}
// 						</Text>
// 						<View
// 							style={{
// 								borderColor: "#ffffff",
// 								borderRadius: 4,
// 								borderWidth: 1,
// 								paddingVertical: 20,
// 								paddingHorizontal: 14,
// 								marginBottom: 15,
// 							}}>
// 							<TextInput
// 								placeholder="Enter Your Email"
// 								placeholderTextColor="#ffffff"
// 								onChangeText={(email) => setEmail(email)}
// 							/>
// 							{/* <Text style={{ color: 'red' }}>{!checkEmail ? 'Sai dinh dang email' : ''}</Text> */}
// 						</View>
// 						<Text
// 							style={{
// 								color: "#ffffff",
// 								fontSize: 18,
// 								marginBottom: 4,
// 							}}>
// 							{"Password"}
// 						</Text>
// 						<View
// 							style={{
// 								borderColor: "#ffffff",
// 								borderRadius: 4,
// 								borderWidth: 1,
// 								paddingVertical: 20,
// 								paddingHorizontal: 13,
// 								marginBottom: 32,
// 							}}>
// 							<TextInput
// 								placeholder="Enter Your Password"
// 								placeholderTextColor="#ffffff"
// 								secureTextEntry={true}
// 								onChangeText={(password) => setPassword(password)}
// 							/>
// 							{/* <Text style={{ color: 'red' }}>{errorPass}</Text> */}
// 						</View>
// 						<View
// 							style={{
// 								alignItems: "center",
// 								backgroundColor: "#6300a0",
// 								borderRadius: 8,
// 								paddingVertical: 22,
// 							}}>
// 							<Text
// 								style={{
// 									color: "#ffffff",
// 									fontSize: 18,
// 									fontWeight: "bold",
// 								}}
// 								onPress={onLogin}>
// 								{"LOGIN"}
// 							</Text>
// 						</View>
// 						<View
// 							style={{
// 								alignItems: "center",
// 								marginTop: 10
// 							}}>
// 							<Text
// 								style={{
// 									color: "#ffffff",
// 									fontSize: 16,
// 									fontWeight: "bold",
// 								}}
// 								onPress={onRegister}>
// 								Do not have an account? {"Register here"}
// 							</Text>
// 						</View>
// 					</View>
// 				</ImageBackground>
// 				<View
// 					style={{
// 						height: 305,
// 						backgroundColor: "#cdd1d8E3",
// 					}}>
// 				</View>
// 			</ScrollView>
// 		</SafeAreaView>

// 	)
// }







import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, ImageBackground, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onRegister = () => {
		navigation.navigate("dangky");
	}

	const onLogin = async () => {
		try {
			const response = await axios.post('https://65ae567f1dfbae409a7497b3.mockapi.io/login', {
				email: email,
				password: password,
			});

			if (response.data.success) {
				// Save user credentials to AsyncStorage on successful login
				await AsyncStorage.setItem('userEmail', email);
				await AsyncStorage.setItem('userPassword', password);

				alert('Login successful!');
				// Navigate to your home screen or wherever you want to go after login
				navigation.navigate('trangchu');
			} else {
				alert('Login failed', response.data.message);
			}
		} catch (error) {
			alert('Error', 'An error occurred during login. Please try again later.');
			console.error('Login error:', error);
		}
	};

	useEffect(() => {
		// Check if there are saved credentials and automatically log in
		const autoLogin = async () => {
			try {
				const storedEmail = await AsyncStorage.getItem('userEmail');
				const storedPassword = await AsyncStorage.getItem('userPassword');

				if (storedEmail && storedPassword) {
					setEmail(storedEmail);
					setPassword(storedPassword);
					onLogin(); // Call the login function with stored credentials
				}
			} catch (error) {
				console.error('Auto login error:', error);
			}
		};

		autoLogin();
	}, []); // Empty dependency array ensures that this effect runs only once on component mount

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView
				style={{
					flex: 1,
					backgroundColor: "#000000",
					paddingBottom: -305,
				}}>
				<ImageBackground
					source={{ uri: 'https://png.pngtree.com/back_origin_pic/04/19/29/46cd9531c4ddbdaf61346553c4c875da.jpg' }}
					resizeMode={'stretch'}
					style={{
						paddingTop: 12,
						paddingBottom: 215,
						paddingRight: 15,
						marginHorizontal: 1,
					}}
				>
					<Image
						source={{ uri: "https://media1.thehungryjpeg.com/thumbs2/ori_3682048_w9eqsjmyqf1hj7ajbmk6wnco9pjgqdd35q1impxb_blue-phoenix-esport-mascot-logo-design.png" }}
						resizeMode={"stretch"}
						style={{
							width: 200,
							height: 200,
							marginTop: 10,
							marginBottom: 30,
							marginLeft: '27%',
						}}
					/>
					<View
						style={{
							backgroundColor: "#280346B0",
							borderRadius: 16,
							paddingVertical: 34,
							paddingHorizontal: 24,
							marginLeft: 15,
						}}>
						<Text
							style={{
								color: "#ffffff",
								fontSize: 18,
								marginBottom: 5,
							}}>
							{"Email"}
						</Text>
						<View
							style={{
								borderColor: "#ffffff",
								borderRadius: 4,
								borderWidth: 1,
								paddingVertical: 20,
								paddingHorizontal: 14,
								marginBottom: 15,
							}}>
							<TextInput
								placeholder="Enter Your Email"
								placeholderTextColor="#ffffff"
								onChangeText={(email) => setEmail(email)}
							/>
							{/* <Text style={{ color: 'red' }}>{!checkEmail ? 'Sai dinh dang email' : ''}</Text> */}
						</View>
						<Text
							style={{
								color: "#ffffff",
								fontSize: 18,
								marginBottom: 4,
							}}>
							{"Password"}
						</Text>
						<View
							style={{
								borderColor: "#ffffff",
								borderRadius: 4,
								borderWidth: 1,
								paddingVertical: 20,
								paddingHorizontal: 13,
								marginBottom: 32,
							}}>
							<TextInput
								placeholder="Enter Your Password"
								placeholderTextColor="#ffffff"
								secureTextEntry={true}
								onChangeText={(password) => setPassword(password)}
							/>
							{/* <Text style={{ color: 'red' }}>{errorPass}</Text> */}
						</View>
						<View
							style={{
								alignItems: "center",
								backgroundColor: "#6300a0",
								borderRadius: 8,
								paddingVertical: 22,
							}}>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 18,
									fontWeight: "bold",
								}}
								onPress={onLogin}>
								{"LOGIN"}
							</Text>
						</View>
						<View
							style={{
								alignItems: "center",
								marginTop: 10
							}}>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 16,
									fontWeight: "bold",
								}}
								onPress={onRegister}>
								Do not have an account? {"Register here"}
							</Text>
						</View>
					</View>
				</ImageBackground>
				<View
					style={{
						height: 305,
						backgroundColor: "#cdd1d8E3",
					}}>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Login;
