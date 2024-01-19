import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Text, Image, } from "react-native";
// import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient

export default function Onboarding(props) {
	const navigation = useNavigation();
	const onGet = () => {
		navigation.navigate("homescreem");
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
					backgroundColor: "#ffffff",
				}}>
				<View
					style={{
					}}>
					<ImageBackground
						source={{ uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/Coffee-photography-tutorial-4.jpg' }}
						resizeMode={'stretch'}
						style={{
							flexDirection: "row",
							paddingTop: 17,
							paddingBottom: 671,
							paddingLeft: 29,
							paddingRight: 17,
						}}
					>
					</ImageBackground>
					<View
						start={{ x: 0.5, y: -3.0616171314629196e-17 }}
						end={{ x: 0.5, y: 0.9999999999999999 }}
						colors={["#00000000", "#000000"]}
						style={{
							position: "absolute",
							bottom: -110,
							right: 0,
							width: 375,
							height: 362,
						}}>
						<Text
							style={{
								color: "yellow",
								fontSize: 34,
								fontWeight: "bold",
								textAlign: "center",
								marginTop: 59,
								marginBottom: 33,
								marginHorizontal: 49,
								width: 277,
							}}>
							{"Coffee so good, your taste buds will love it."}
						</Text>
						<Text
							style={{
								color: "white",
								fontSize: 14,
								textAlign: "center",
								marginBottom: 21,
								marginHorizontal: 63,
								width: 249,
							}}>
							{"The best grain, the powerful flavor."}
						</Text>
						<View
							style={{
								alignItems: "center",
								backgroundColor: "#c67c4e",
								borderRadius: 16,
								paddingVertical: 23,
								marginBottom: 28,
								marginHorizontal: 30,
							}}
						>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 16,
									fontWeight: "bold",
								}}
								onPress={onGet}
							>
								{"Get Started"}
							</Text>
						</View>
						<View
							style={{
								backgroundColor: "#ffffff80",
								borderRadius: 2.5,
								marginHorizontal: 120,
							}}>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>

	)
}
