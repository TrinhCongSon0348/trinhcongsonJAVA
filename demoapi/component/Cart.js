import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
// import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient

export default function Cart(props) {
	const navigation = useNavigation();
	const onBack = () => {
		navigation.navigate("Home")
	}
	const onCheckout = () => {
		navigation.navigate("thanhtoan")
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
					paddingTop: 44,
					paddingBottom: 146,
				}}>
				<View>
					<TouchableOpacity style={{
						width: 60,
						height: 30,
						borderRadius: 10,
						alignItems: "center",
						justifyContent: "center",
						marginTop: 5,
						backgroundColor: "black",
						marginBottom: 5,
						marginLeft: 5
					}} onPress={onBack}>
						<Text style={{color: 'white'}}>Quay lại</Text>
					</TouchableOpacity>
				</View>
				{/* <View 
					style = {{
						backgroundColor: "#ffffff",
						paddingHorizontal: 21,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 13,
							height: 13,
							marginTop: 19,
						}}
					/>
				</View> */}
				<View
					style={{
						backgroundColor: "#ffffff",
						paddingVertical: 10,
						paddingHorizontal: 17,
					}}>
					<Text
						style={{
							color: "#000000",
							fontSize: 36,
							fontWeight: "bold",
						}}>
						{"Cart"}
					</Text>
				</View>

				{/* <View 
					style = {{
						backgroundColor: "#ffffff",
						paddingVertical: 25,
						paddingRight: 20,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							marginBottom: 2,
							marginLeft: 27,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 57,
								height: 20,
								marginTop: 8,
								marginRight: 35,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								flex: 1,
							}}>
							{"Before free shipping $1.67"}
						</Text>
					</View>
					<View 
						style = {{
							width: 237,
							height: 4,
							backgroundColor: "#f9f9f9",
							borderRadius: 10,
							marginLeft: 118,
						}}>
						<View 
							style = {{
								width: 205,
								height: 4,
								backgroundColor: "#65d4b3",
								borderRadius: 10,
							}}>
						</View>
					</View>
				</View> */}

				<View
					style={{
						flexDirection: "row",
						backgroundColor: "#ffffff",
						paddingTop: 5,
						paddingBottom: 22,
						paddingHorizontal: 14,
					}}>
					<Image
						source={{ uri: "https://eutravel.ch/wp-content/uploads/2019/11/top-10-mon-an-ngon-noi-tieng-nhat-o-y-7.jpg" }}
						resizeMode={"stretch"}
						style={{
							width: 81,
							height: 81,
							marginRight: 22,
						}}
					/>
					<View
						style={{
							width: 48,
							alignSelf: "flex-start",
							marginTop: 12,
							marginRight: 7,
						}}>
						<Text
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginBottom: 11,
							}}>
							{"Pizza"}
						</Text>
						<View
							style={{
								backgroundColor: "#f9f8f6",
								borderRadius: 37,
								paddingHorizontal: 14,
							}}>
							<View
								style={{
									height: 2,
									backgroundColor: "#000000",
									borderRadius: 4,
									marginTop: 19,
								}}>
							</View>
						</View>
					</View>
					<Text
						style={{
							color: "#000000",
							fontSize: 16,
							marginTop: 54,
							marginRight: 16,
						}}>
						{"800 g"}
					</Text>
					<View
						style={{
							width: 40,
							alignSelf: "flex-start",
							backgroundColor: "#f9f8f6",
							borderRadius: 37,
							paddingHorizontal: 14,
							marginTop: 40,
						}}>
						<View
							style={{
								marginTop: 19,
							}}>
							<View
								style={{
									height: 2,
									backgroundColor: "#000000",
									borderRadius: 4,
								}}>
							</View>
							<Image
								source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
								resizeMode={"stretch"}
								style={{
									position: "absolute",
									bottom: -5,
									right: 5,
									width: 2,
									height: 12,
								}}
							/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}>
					</View>
					<Text
						style={{
							color: "#000000",
							fontSize: 16,
							marginTop: 53,
						}}>
						{"$5.7"}
					</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						backgroundColor: "#ffffff",
						paddingTop: 5,
						paddingBottom: 22,
						paddingHorizontal: 14,
					}}>
					<Image
						source={{ uri: "https://sohanews.sohacdn.com/thumb_w/660/2015/mon-ramen-ngon-nhat-nhat-ban-1435740154572-0-0-255-500-crop-1435740606721.jpg" }}
						resizeMode={"stretch"}
						style={{
							width: 81,
							height: 81,
							marginRight: 22,
						}}
					/>
					<View
						style={{
							width: 48,
							alignSelf: "flex-start",
							marginTop: 12,
							marginRight: 7,
						}}>
						<Text
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginBottom: 11,
							}}>
							{"Ramen"}
						</Text>
						<View
							style={{
								backgroundColor: "#f9f8f6",
								borderRadius: 37,
								paddingHorizontal: 14,
							}}>
							<View
								style={{
									height: 2,
									backgroundColor: "#000000",
									borderRadius: 4,
									marginTop: 19,
								}}>
							</View>
						</View>
					</View>
					<Text
						style={{
							color: "#000000",
							fontSize: 16,
							marginTop: 54,
							marginRight: 16,
						}}>
						{"800 g"}
					</Text>
					<View
						style={{
							width: 40,
							alignSelf: "flex-start",
							backgroundColor: "#f9f8f6",
							borderRadius: 37,
							paddingHorizontal: 14,
							marginTop: 40,
						}}>
						<View
							style={{
								marginTop: 19,
							}}>
							<View
								style={{
									height: 2,
									backgroundColor: "#000000",
									borderRadius: 4,
								}}>
							</View>
							<Image
								source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
								resizeMode={"stretch"}
								style={{
									position: "absolute",
									bottom: -5,
									right: 5,
									width: 2,
									height: 12,
								}}
							/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}>
					</View>
					<Text
						style={{
							color: "#000000",
							fontSize: 16,
							marginTop: 53,
						}}>
						{"$5.7"}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						backgroundColor: "#ffffff",
						paddingTop: 5,
						paddingBottom: 22,
						paddingHorizontal: 14,
					}}>
					<Image
						source={{ uri: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/04_2021/Spaghetti.jpg" }}
						resizeMode={"stretch"}
						style={{
							width: 81,
							height: 81,
							marginRight: 22,
						}}
					/>
					<View
						style={{
							width: 48,
							alignSelf: "flex-start",
							marginTop: 12,
							marginRight: 7,
						}}>
						<Text
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginBottom: 11,
							}}>
							{"Mỳ Ý"}
						</Text>
						<View
							style={{
								backgroundColor: "#f9f8f6",
								borderRadius: 37,
								paddingHorizontal: 14,
							}}>
							<View
								style={{
									height: 2,
									backgroundColor: "#000000",
									borderRadius: 4,
									marginTop: 19,
								}}>
							</View>
						</View>
					</View>
					<Text
						style={{
							color: "#000000",
							fontSize: 16,
							marginTop: 54,
							marginRight: 16,
						}}>
						{"800 g"}
					</Text>
					<View
						style={{
							width: 40,
							alignSelf: "flex-start",
							backgroundColor: "#f9f8f6",
							borderRadius: 37,
							paddingHorizontal: 14,
							marginTop: 40,
						}}>
						<View
							style={{
								marginTop: 19,
							}}>
							<View
								style={{
									height: 2,
									backgroundColor: "#000000",
									borderRadius: 4,
								}}>
							</View>
							<Image
								source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
								resizeMode={"stretch"}
								style={{
									position: "absolute",
									bottom: -5,
									right: 5,
									width: 2,
									height: 12,
								}}
							/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}>
					</View>
					<Text
						style={{
							color: "#000000",
							fontSize: 16,
							marginTop: 53,
						}}>
						{"$5.7"}
					</Text>
				</View>
				<View
					style={{
					}}>
					<View
						style={{
							flexDirection: "row",
							backgroundColor: "#ffffff",
							paddingTop: 5,
							paddingBottom: 22,
							paddingHorizontal: 14,
						}}>
						<Image
							source={{ uri: "https://jes.edu.vn/wp-content/uploads/2017/08/do-an-nhat.jpg" }}
							resizeMode={"stretch"}
							style={{
								width: 81,
								height: 81,
								marginRight: 22,
							}}
						/>
						<View
							style={{
								width: 48,
								alignSelf: "flex-start",
								marginTop: 12,
								marginRight: 7,
							}}>
							<Text
								style={{
									color: "#000000",
									fontSize: 17,
									fontWeight: "bold",
									marginBottom: 11,
								}}>
								{"Shusi"}
							</Text>
							<View
								style={{
									backgroundColor: "#f9f8f6",
									borderRadius: 37,
									paddingHorizontal: 14,
								}}>
								<View
									style={{
										height: 2,
										backgroundColor: "#000000",
										borderRadius: 4,
										marginTop: 19,
									}}>
								</View>
							</View>
						</View>
						<Text
							style={{
								color: "#000000",
								fontSize: 16,
								marginTop: 54,
								marginRight: 16,
							}}>
							{"800 g"}
						</Text>
						<View
							style={{
								width: 40,
								alignSelf: "flex-start",
								backgroundColor: "#f9f8f6",
								borderRadius: 37,
								paddingHorizontal: 14,
								marginTop: 40,
							}}>
							<View
								style={{
									marginTop: 19,
								}}>
								<View
									style={{
										height: 2,
										backgroundColor: "#000000",
										borderRadius: 4,
									}}>
								</View>
								<Image
									source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
									resizeMode={"stretch"}
									style={{
										position: "absolute",
										bottom: -5,
										right: 5,
										width: 2,
										height: 12,
									}}
								/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}>
						</View>
						<Text
							style={{
								color: "#000000",
								fontSize: 16,
								marginTop: 53,
							}}>
							{"$5.7"}
						</Text>
					</View>
					<View
						// start={{ x: 0.5000000360764963, y: -3.0616170260519284e-17 }}
						// end={{ x: 0.5000000360764965, y: 0.6052631711860776 }}
						// colors={["#ffffff00", "#ffffff"]}
						style={{
							position: 'absolute',
							bottom: -146,
							right: 0,
							width: 375,
							height: 152,
							paddingHorizontal: 16,
						}}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#000000",
								borderRadius: 43,
								paddingVertical: 18,
								paddingHorizontal: 26,
								marginTop: 39,
							}}>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 19,
									fontWeight: "bold",
									marginRight: 4,
									flex: 1,
									textAlign: 'center'
								}}
								onPress={onCheckout}>
								{"Check out"}
							</Text>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 19,
									fontWeight: "bold",
								}}>
								{/* {"$25.3"} */}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>

	)
}
