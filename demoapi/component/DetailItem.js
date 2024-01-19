import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetailItem(props) {
	const navigation = useNavigation();
	const onBack = () => {
		navigation.navigate("trangchu")
	}
	const onPay = () => {
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
					paddingTop: 17,
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
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 32,
						marginHorizontal: 17,
					}}>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 26,
						marginHorizontal: 34,
					}}>
					{/* <Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 7,
							height: 14,
						}}
					/> */}
					<Text
						style={{
							color: "#2f2d2c",
							fontSize: 18,
							fontWeight: "bold",
						}}>
						{"Detail"}
					</Text>
					{/* <Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 18,
							height: 17,
						}}
					/> */}
				</View>
				<Image
					source={{ uri: "https://dominofilm.vn/uploads/albums/2019/01/photo_5c495cf04fcea.jpg" }}
					resizeMode={"stretch"}
					style={{
						borderRadius: 16,
						height: 226,
						marginBottom: 23,
						marginHorizontal: 30,
					}}
				/>
				<Text
					style={{
						color: "#2e2d2c",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 13,
						marginLeft: 30,
					}}>
					{"Cappucino"}
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 19,
						marginHorizontal: 30,
					}}>
					<View
						style={{
							flex: 1,
							marginRight: 4,
						}}>
						<Text
							style={{
								color: "#9b9b9b",
								fontSize: 12,
								marginBottom: 16,
							}}>
							{"with Chocolate"}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
								resizeMode={"stretch"}
								style={{
									width: 20,
									height: 20,
									marginRight: 4,
								}}
							/>
							<Text
								style={{
									color: "#2f2d2c",
									fontSize: 16,
									fontWeight: "bold",
									flex: 1,
								}}>
								{"4.8 (230)"}
							</Text>
						</View>
					</View>
					<View
						style={{
							width: 44,
							backgroundColor: "#f8f8f8",
							borderRadius: 14,
							paddingHorizontal: 12,
							marginRight: 12,
						}}>
						<Image
							source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
							resizeMode={"stretch"}
							style={{
								height: 20,
								marginTop: 12,
							}}
						/>
					</View>
					<View
						style={{
							width: 44,
							backgroundColor: "#f8f8f8",
							borderRadius: 14,
							paddingHorizontal: 12,
						}}>
						<Image
							source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
							resizeMode={"stretch"}
							style={{
								height: 20,
								marginTop: 12,
							}}
						/>
					</View>
				</View>
				<View
					style={{
						height: 1,
						backgroundColor: "#eaeaea",
						marginBottom: 22,
						marginHorizontal: 30,
					}}>
				</View>
				<Text
					style={{
						color: "#2e2d2c",
						fontSize: 16,
						fontWeight: "bold",
						marginBottom: 19,
						marginLeft: 31,
					}}>
					{"Description"}
				</Text>
				<Text
					style={{
						color: "#9b9b9b",
						fontSize: 14,
						marginBottom: 30,
						marginHorizontal: 30,
						width: 315,
					}}>
					{"A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. Read More"}
				</Text>
				{/*Size*/}
				{/* <Text
					style={{
						color: "#2e2d2c",
						fontSize: 16,
						fontWeight: "bold",
						marginBottom: 14,
						marginLeft: 30,
					}}>
					{"Size"}
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 17,
						marginHorizontal: 30,
					}}>
					<View
						style={{
							width: 96,
							alignItems: "center",
							backgroundColor: "#ffffff",
							borderColor: "#dedede",
							borderRadius: 12,
							borderWidth: 1,
							paddingVertical: 15,
						}}>
						<Text
							style={{
								color: "#2f2d2c",
								fontSize: 14,
							}}>
							{"S"}
						</Text>
					</View>
					<View
						style={{
							width: 96,
							alignItems: "center",
							backgroundColor: "#fff4ee",
							borderColor: "#c67c4e",
							borderRadius: 12,
							borderWidth: 1,
							paddingVertical: 15,
						}}>
						<Text
							style={{
								color: "#c67c4e",
								fontSize: 14,
							}}>
							{"M"}
						</Text>
					</View>
					<View
						style={{
							width: 96,
							alignItems: "center",
							backgroundColor: "#ffffff",
							borderColor: "#dedede",
							borderRadius: 12,
							borderWidth: 1,
							paddingVertical: 15,
						}}>
						<Text
							style={{
								color: "#2f2d2c",
								fontSize: 14,
							}}>
							{"L"}
						</Text>
					</View>
				</View> */}
				<View
					style={{
						backgroundColor: "#ffffff",
						borderRadius: 24,
						paddingVertical: 16,
						shadowColor: "#e4e4e440",
						shadowOpacity: 0.3,
						shadowOffset: {
							width: 0,
							height: -10
						},
						shadowRadius: 24,
						elevation: 24,
					}}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 28,
							marginHorizontal: 30,
						}}>
						<View
							style={{
								width: 53,
							}}>
							<Text
								style={{
									color: "#9b9b9b",
									fontSize: 14,
									marginBottom: 12,
									marginLeft: 1,
								}}>
								{"Price"}
							</Text>
							<Text
								style={{
									color: "#c67c4e",
									fontSize: 18,
									fontWeight: "bold",
								}}>
								{"$ 4.53"}
							</Text>
						</View>
						<View
							style={{
								width: 217,
								alignItems: "center",
								backgroundColor: "#c67c4e",
								borderRadius: 16,
								paddingVertical: 24,
							}}>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 16,
									fontWeight: "bold",
								}}
								onPress={onPay}>
								{"Buy Now"}
							</Text>
						</View>
					</View>
					<View
						style={{
							height: 5,
							backgroundColor: "#0000004D",
							borderRadius: 2.5,
							marginHorizontal: 120,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>

	)
}
