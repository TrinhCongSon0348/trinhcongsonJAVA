// import React from "react";
// import { SafeAreaView, View, ScrollView, ImageBackground, Image, Text, TextInput } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { useState } from "react";
// import axios from 'axios';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Register() {
// 	const navigation = useNavigation();
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	// const [checkEmail, setCheckEmail] = useState(true);
// 	// const [errorPass, setErrorPass] = useState('');

// 	const onLogin = () => {
// 		navigation.navigate("dangnhap");
// 	}



// 	// let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// 	// if (!regexEmail.test(formData.email)) {
// 	// 	setCheckEmail(false);
// 	// }
// 	// else {
// 	// 	setCheckEmail(true);
// 	// }
// 	// formData.password === '' ? setErrorPass('Mat khau rong') : setCheckEmail('')



// 	// const onRegister = () => {
// 	// 	let formData = {
// 	// 		email: email,
// 	// 		password: password,
// 	// 	}
// 	// 	axios.post('https://65ae567f1dfbae409a7497b3.mockapi.io/register', formData)
// 	// 		.then((respone) => {
// 	// 			if (respone.data) {
// 	// 				alert(`Bạn đã đăng ký thành công với Email: ${respone.data.email}. Đăng nhập ngay thôi`);
// 	// 				navigation.navigate("dangnhap");
// 	// 			}
// 	// 		})
// 	// 		.catch((err) => console.log(err))
// 	// }

// 	const onRegister = async () => {
// 		try {
// 		  // Validate email and password here before making the request

// 		  const response = await axios.post('https://65ae567f1dfbae409a7497b3.mockapi.io/register', {
// 			email: email,
// 			password: password,
// 		  });

// 		  if (response.data) {
// 			alert(`Bạn đã đăng ký thành công với Email: ${response.data.email}. Đăng nhập ngay thôi`);
// 			navigation.navigate("dangnhap");
// 		  } else {
// 			alert('Lỗi đăng ký', response.data.message);
// 		  }
// 		} catch (error) {
// 		  alert('Lỗi đăng ký', 'Đã có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau.');
// 		  console.error('Lỗi khi đăng ký', error);
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
// 						{/* <Text
// 							style={{
// 								color: "#ffffff",
// 								fontSize: 18,
// 								marginBottom: 5,
// 							}}>
// 							{" User Name"}
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
// 								placeholder="Enter User Name"
// 								placeholderTextColor="#ffffff"
// 								onChangeText={(name) => setName(name)}
// 							/>
// 						</View> */}
// 						<Text
// 							style={{
// 								color: "#ffffff",
// 								fontSize: 18,
// 								marginBottom: 4,
// 							}}>
// 							{"Email"}
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
// 								placeholder="Enter User Email Address"
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
// 								placeholder="Enter Your Password "
// 								placeholderTextColor="#ffffff"
// 								onChangeText={(password) => setPassword(password)}
// 							/>
// 							{/* <Text style={{ color: 'red' }}>{errorPass}</Text> */}
// 						</View>

// 						{/* <Text
// 							style={{
// 								color: "#ffffff",
// 								fontSize: 18,
// 								marginBottom: 4,
// 							}}>
// 							{"Repeat Your Password"}
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
// 								placeholder="Repeat Your Password"
// 								placeholderTextColor="#ffffff"
// 								onChangeText={(npassword) => setNPassword(npassword)}
// 							/>
// 						</View> */}
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
// 								onPress={onRegister}>
// 								{"REGISTER"}
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
// 								onPress={(onLogin)}>
// 								Have already an account? {"Login here"}
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








import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, ImageBackground, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

const Register = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onLogin = () => {
		navigation.navigate("dangnhap");
	}

	const onRegister = async () => {
		try {
			const response = await axios.post('https://65ae567f1dfbae409a7497b3.mockapi.io/register', {
				email: email,
				password: password,
			});

			if (response.data.success) {
				// Save user credentials to AsyncStorage
				await AsyncStorage.setItem('userEmail', email);
				await AsyncStorage.setItem('userPassword', password);

				alert(`You have successfully registered with Email: ${email}. Please log in.`);
				navigation.navigate('dangnhap');
			} 
			else 
			{
				alert('Registration failed', response.data.message);
			}
		} catch (error) {
			alert('Error', 'An error occurred during registration. Please try again later.');
			console.error('Registration error:', error);
		}
	};

	return (
		// ... Your existing registration component code
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
						{/* <Text
								style={{
									color: "#ffffff",
									fontSize: 18,
									marginBottom: 5,
								}}>
								{" User Name"}
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
									placeholder="Enter User Name"
									placeholderTextColor="#ffffff"
									onChangeText={(name) => setName(name)}
								/>
							</View> */}
						<Text
							style={{
								color: "#ffffff",
								fontSize: 18,
								marginBottom: 4,
							}}>
							{"Email"}
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
								placeholder="Enter User Email Address"
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
								placeholder="Enter Your Password "
								placeholderTextColor="#ffffff"
								onChangeText={(password) => setPassword(password)}
							/>
							{/* <Text style={{ color: 'red' }}>{errorPass}</Text> */}
						</View>

						{/* <Text
								style={{
									color: "#ffffff",
									fontSize: 18,
									marginBottom: 4,
								}}>
								{"Repeat Your Password"}
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
									placeholder="Repeat Your Password"
									placeholderTextColor="#ffffff"
									onChangeText={(npassword) => setNPassword(npassword)}
								/>
							</View> */}
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
								onPress={onRegister}>
								{"REGISTER"}
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
								onPress={(onLogin)}>
								Have already an account? {"Login here"}
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

	)
};

export default Register;
