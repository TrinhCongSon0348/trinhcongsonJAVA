import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Image, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Login(props) {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onRegister = () => {
		navigation.navigate("dangky");
	}
	const onLogin = () => {
		navigation.navigate("trangchu");
	}

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

	)
}
