import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Payment(props) {
	const navigation = useNavigation();
	const onBack = () => {
		navigation.navigate("giohang")
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
					borderRadius: 30,
				}}>
				<View>
					<TouchableOpacity style={{
						width: 60,
						height: 30,
						borderRadius: 10,
						alignItems: "center",
						justifyContent: "center",
						marginTop: 5,
						backgroundColor: "#33FFCC",
						marginBottom: 5,
						marginLeft: 5
					}} onPress={onBack}>
						<Text>Quay lại</Text>
					</TouchableOpacity>
				</View>
				<Image
					source={{ uri: "https://media1.thehungryjpeg.com/thumbs2/ori_3682048_w9eqsjmyqf1hj7ajbmk6wnco9pjgqdd35q1impxb_blue-phoenix-esport-mascot-logo-design.png" }}
					resizeMode={"stretch"}
					style={{
						width: 45,
						height: 45,
						marginBottom: 10,
						marginHorizontal: 29,
						marginTop: 10
					}}
				/>
				<Text
					style={{
						color: "#0093ff",
						fontSize: 23,
						fontWeight: "bold",
						marginBottom: 26,
						marginLeft: 33,
					}}>
					{"Add Payment"}
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 28,
						marginHorizontal: 29,
					}}>
					<View
						style={{
							width: 70,
							backgroundColor: "#ffffff",
							paddingHorizontal: 2,
							marginRight: 16,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
								width: 0,
								height: 0
							},
							shadowRadius: 14,
							elevation: 14,
						}}>
						<Image
							source={{ uri: "https://tous-logos.com/wp-content/uploads/2017/04/Visa-logo.png" }}
							resizeMode={"stretch"}
							style={{
								height: 18,
								marginTop: 12,
							}}
						/>
					</View>
					<View
						style={{
							width: 70,
							backgroundColor: "#ffffff",
							paddingHorizontal: 11,
							marginRight: 16,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
								width: 0,
								height: 0
							},
							shadowRadius: 14,
							elevation: 14,
						}}>
						<Image
							source={{ uri: "https://logos-download.com/wp-content/uploads/2016/03/Mastercard_Logo_1990-2048x1223.png" }}
							resizeMode={"stretch"}
							style={{
								height: 28,
								marginTop: 7,
							}}
						/>
					</View>
					<View
						style={{
							width: 70,
							backgroundColor: "#ffffff",
							paddingHorizontal: 9,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
								width: 0,
								height: 0
							},
							shadowRadius: 14,
							elevation: 14,
						}}>
						<Image
							source={{ uri: "https://vectorseek.com/wp-content/uploads/2020/12/Jazz-logo-vector-scaled.jpg" }}
							resizeMode={"stretch"}
							style={{
								height: 50,
								marginTop: 7,
							}}
						/>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 22,
						marginHorizontal: 34,
					}}>
					<Image
						source={{ uri: "https://tse2.mm.bing.net/th?id=OIP.8_msg30fzo5nmmwNo-PwwAHaHa&pid=Api&P=0&h=180" }}
						resizeMode={"stretch"}
						style={{
							width: 20,
							height: 20,
							marginRight: 11,
						}}
					/>
					<Text
						style={{
							color: "#0093ff",
							fontSize: 14,
							fontWeight: "bold",
							flex: 1,
						}}>
						{"Scan Card"}
					</Text>
				</View>
				<Text
					style={{
						color: "#454545",
						fontSize: 17,
						fontWeight: "bold",
						marginBottom: 4,
						marginLeft: 31,
					}}>
					{"Name on card"}
				</Text>
				<View
					style={{
						backgroundColor: "#ffffff",
						borderColor: "#454545",
						borderWidth: 1,
						paddingVertical: 18,
						paddingHorizontal: 13,
						marginBottom: 29,
						marginHorizontal: 29,
						shadowColor: "#0000001A",
						shadowOpacity: 0.1,
						shadowOffset: {
							width: 0,
							height: 0
						},
						shadowRadius: 14,
						elevation: 14,
					}}>
					<Text
						style={{
							color: "#0093ff",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"Name"}
					</Text>
				</View>
				<Text
					style={{
						color: "#454545",
						fontSize: 17,
						fontWeight: "bold",
						marginBottom: 4,
						marginLeft: 30,
					}}>
					{"Card Number"}
				</Text>
				<View
					style={{
						backgroundColor: "#ffffff",
						borderColor: "#454545",
						borderWidth: 1,
						paddingVertical: 18,
						paddingHorizontal: 12,
						marginBottom: 29,
						marginHorizontal: 29,
						shadowColor: "#0000001A",
						shadowOpacity: 0.1,
						shadowOffset: {
							width: 0,
							height: 0
						},
						shadowRadius: 14,
						elevation: 14,
					}}>
					<Text
						style={{
							color: "#0093ff",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"XXXX   XXXX   XXXX   XXXX"}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 4,
						marginHorizontal: 31,
					}}>
					<Text
						style={{
							color: "#454545",
							fontSize: 17,
							fontWeight: "bold",
							marginRight: 4,
							flex: 1,
						}}>
						{"expiry date"}
					</Text>
					<Text
						style={{
							color: "#454545",
							fontSize: 17,
							fontWeight: "bold",
						}}>
						{"Security code"}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 29,
						marginHorizontal: 29,
					}}>
					<View
						style={{
							width: 163,
							backgroundColor: "#ffffff",
							borderColor: "#454545",
							borderWidth: 1,
							paddingVertical: 18,
							paddingHorizontal: 13,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
								width: 0,
								height: 0
							},
							shadowRadius: 14,
							elevation: 14,
						}}>
						<Text
							style={{
								color: "#0093ff",
								fontSize: 13,
								fontWeight: "bold",
							}}>
							{"MM/YY"}
						</Text>
					</View>
					<View
						style={{
							width: 163,
							backgroundColor: "#ffffff",
							borderColor: "#454545",
							borderWidth: 1,
							paddingVertical: 18,
							paddingHorizontal: 17,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
								width: 0,
								height: 0
							},
							shadowRadius: 14,
							elevation: 14,
						}}>
						<Text
							style={{
								color: "#0093ff",
								fontSize: 13,
								fontWeight: "bold",
							}}>
							{"CVV"}
						</Text>
					</View>
				</View>
				<Text
					style={{
						color: "#454545",
						fontSize: 17,
						fontWeight: "bold",
						marginBottom: 4,
						marginLeft: 30,
					}}>
					{"ZIP/Postal Code"}
				</Text>
				<View
					style={{
						backgroundColor: "#ffffff",
						borderColor: "#454545",
						borderWidth: 1,
						paddingVertical: 18,
						paddingHorizontal: 12,
						marginBottom: 45,
						marginHorizontal: 29,
						shadowColor: "#0000001A",
						shadowOpacity: 0.1,
						shadowOffset: {
							width: 0,
							height: 0
						},
						shadowRadius: 14,
						elevation: 14,
					}}>
					<Text
						style={{
							color: "#0093ff",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"xXXXX"}
					</Text>
				</View>
				<View
					style={{
						alignItems: "center",
						backgroundColor: "#0093ff",
						borderRadius: 114,
						paddingVertical: 13,
						marginBottom: 45,
						marginHorizontal: 50,
						shadowColor: "#00000047",
						shadowOpacity: 0.3,
						shadowOffset: {
							width: 0,
							height: 0
						},
						shadowRadius: 11,
						elevation: 11,
					}}>
					<Text
						style={{
							color: "#ffffff",
							fontSize: 24,
							fontWeight: "bold",
						}}>
						{"Add"}
					</Text>
				</View>
				<View
					style={{
						backgroundColor: "#ffffff",
						paddingVertical: 14,
						shadowColor: "#0000002B",
						shadowOpacity: 0.2,
						shadowOffset: {
							width: 0,
							height: 0
						},
						shadowRadius: 11,
						elevation: 11,
					}}>
					{/* <View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 18,
							marginHorizontal: 38,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 29,
								height: 30,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 36,
								height: 31,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 30,
								height: 30,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 24,
								height: 31,
							}}
						/>
					</View>
					<View 
						style = {{
							height: 6,
							borderColor: "#d6d6d6",
							borderWidth: 6,
							marginHorizontal: 147,
						}}>
					</View> */}
				</View>
			</ScrollView>
		</SafeAreaView>

	)
}

