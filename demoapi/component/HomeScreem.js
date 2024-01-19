import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
// import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
import { useNavigation } from '@react-navigation/native';
import Header from "./header";
import Footer from "./footer";

export default function Home(props) {
	const navigation = useNavigation();
	//Chi tiet
	const onDetail = () => {
		navigation.navigate("chitiet");
	}
	//Gio hang
	const onCart = () => {
		navigation.navigate("giohang");
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
					backgroundColor: "#f8f8f8",
					paddingBottom: -112,
				}}>
				<Header></Header>
				<View
					style={{
						marginBottom: 88,
					}}>

					{/*Banner*/}
					<Image
						source={{ uri: "https://dominofilm.vn/uploads/albums/2019/01/photo_5c495cf04fcea.jpg" }}
						resizeMode={"stretch"}
						style={{
							borderRadius: 16,
							height: 300,
							marginBottom: 23,
							marginHorizontal: 30,
						}}
					/>
					{/* <View
						style={{
							position: "absolute",
							bottom: -64,
							right: 30,
							width: 315,
							height: 140,
							backgroundColor: "blue",
							borderRadius: 16,
							paddingHorizontal: 23,
						}}>
						<View
							style={{
								width: 60,
								height: 26,
								alignItems: "center",
								backgroundColor: "#ec500",
								borderRadius: 8,
								paddingVertical: 7,
								marginTop: 13,
								marginBottom: 15,
							}}>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 14,
									fontWeight: "bold",
								}}>
								{"Promo"}
							</Text>
						</View>
					</View> */}
				</View>
				<ScrollView
					horizontal
					style={{
						flexDirection: "row",
						marginBottom: 24,
						marginHorizontal: 30,
					}}>
					<View
						style={{
							width: 121,
							alignSelf: "flex-start",
							alignItems: "center",
							backgroundColor: "#c67c4e",
							borderRadius: 12,
							paddingVertical: 13,
							marginRight: 8,
						}}>
						<Text
							style={{
								color: "#ffffff",
								fontSize: 14,
								fontWeight: "bold",
							}}>
							{"Cappuccino"}
						</Text>
					</View>
					<View
						style={{
							width: 99,
							alignSelf: "flex-start",
							alignItems: "center",
							backgroundColor: "#ffffff",
							borderRadius: 12,
							paddingVertical: 13,
							marginRight: 8,
						}}>
						<Text
							style={{
								color: "#2f4b4e",
								fontSize: 14,
							}}>
							{"Machiato"}
						</Text>
					</View>
					<View
						style={{
							width: 69,
							alignSelf: "flex-start",
							alignItems: "center",
							backgroundColor: "#ffffff",
							borderRadius: 12,
							paddingVertical: 13,
							marginRight: 8,
						}}>
						<Text
							style={{
								color: "#2f4b4e",
								fontSize: 14,
							}}>
							{"Latte"}
						</Text>
					</View>
					<View
						style={{
							width: 110,
							alignSelf: "flex-start",
							backgroundColor: "#ffffff",
							borderRadius: 12,
							paddingVertical: 13,
							paddingHorizontal: 16,
						}}>
						<Text
							style={{
								color: "#2f4b4e",
								fontSize: 14,
							}}>
							{"Americano"}
						</Text>
					</View>
				</ScrollView>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 16,
						marginHorizontal: 30,
					}}>
					<View
						style={{
							width: 149,
							backgroundColor: "#ffffff",
							borderRadius: 16,
							paddingVertical: 4,
							paddingHorizontal: 12,
						}}>

						{/* -------------------------------------------------- */}
						{/* <ImageBackground
							source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
							resizeMode={'stretch'}
							imageStyle={{ borderRadius: 16, }}
							style={{
								marginBottom: 14,
							}}
						>
							<View
								style={{
									width: 51,
									height: 25,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#00000026",
									borderTopLeftRadius: 16,
									borderBottomRightRadius: 16,
									paddingVertical: 7,
								}}>
								<Image
									source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
									resizeMode={"stretch"}
									style={{
										width: 10,
										height: 10,
										marginRight: 2,
									}}
								/>
								<Text
									style={{
										color: "#ffffff",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"4.8"}
								</Text>
							</View>
						</ImageBackground>
						<Text
							style={{
								color: "#2f2d2c",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 9,
							}}>
							{"Cappucino"}
						</Text>
						<Text
							style={{
								color: "#9b9b9b",
								fontSize: 12,
								marginBottom: 8,
							}}>
							{"with Chocolate"}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text
								style={{
									color: "#2f4b4e",
									fontSize: 18,
									fontWeight: "bold",
									marginRight: 4,
									flex: 1,
								}}>
								{"$ 4.53"}
							</Text>
							<View
								style={{
									width: 32,
									backgroundColor: "#c67c4e",
									borderRadius: 10,
									paddingHorizontal: 8,
								}}>
								<Image
									source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
									resizeMode={"stretch"}
									style={{
										height: 16,
										marginTop: 8,
									}}
								/>
							</View>
						</View>
					</View>
					<View
						style={{
							width: 150,
							backgroundColor: "#ffffff",
							borderRadius: 16,
							paddingVertical: 4,
							paddingRight: 12,
						}}>
						<ImageBackground
							source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
							resizeMode={'stretch'}
							imageStyle={{ borderRadius: 16, }}
							style={{
								marginBottom: 14,
								marginLeft: 4,
							}}
						>
							<View
								style={{
									width: 51,
									height: 25,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#00000026",
									borderTopLeftRadius: 16,
									borderBottomRightRadius: 16,
									paddingVertical: 7,
								}}>
								<Image
									source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
									resizeMode={"stretch"}
									style={{
										width: 10,
										height: 10,
										marginRight: 2,
									}}
								/>
								<Text
									style={{
										color: "#ffffff",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"4.9"}
								</Text>
							</View>
						</ImageBackground>
						<Text
							style={{
								color: "#2f2d2c",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 9,
								marginLeft: 12,
							}}>
							{"Cappucino"}
						</Text>
						<Text
							style={{
								color: "#9b9b9b",
								fontSize: 12,
								marginBottom: 8,
								marginLeft: 12,
							}}>
							{"with Oat Milk"}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginLeft: 14,
							}}>
							<Text
								style={{
									color: "#2f4b4e",
									fontSize: 18,
									fontWeight: "bold",
									marginRight: 4,
									flex: 1,
								}}>
								{"$ 3.90"}
							</Text>
							<View
								style={{
									width: 32,
									backgroundColor: "#c67c4e",
									borderRadius: 10,
									paddingHorizontal: 8,
								}}>
								<Image
									source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
									resizeMode={"stretch"}
									style={{
										height: 16,
										marginTop: 8,
									}}
								/>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}>
					<View
						style={{
							width: 149,
							backgroundColor: "#ffffff",
							borderRadius: 16,
							paddingHorizontal: 4,
							marginLeft: 30,
							marginRight: 16,
						}}>
						<ImageBackground
							source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
							resizeMode={'stretch'}
							imageStyle={{ borderRadius: 16, }}
							style={{
								marginTop: 4,
							}}
						>
							<View
								style={{
									width: 51,
									height: 25,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#00000026",
									borderTopLeftRadius: 16,
									borderBottomRightRadius: 16,
									paddingVertical: 7,
								}}>
								<Image
									source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
									resizeMode={"stretch"}
									style={{
										width: 10,
										height: 10,
										marginRight: 2,
									}}
								/>
								<Text
									style={{
										color: "#ffffff",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"4.5"}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View
						style={{
							width: 150,
							backgroundColor: "#ffffff",
							borderRadius: 16,
							paddingHorizontal: 4,
						}}>
						<ImageBackground
							source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
							resizeMode={'stretch'}
							imageStyle={{ borderRadius: 16, }}
							style={{
								marginTop: 4,
							}}
						>
							<View
								style={{
									width: 51,
									height: 25,
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#00000026",
									borderTopLeftRadius: 16,
									borderBottomRightRadius: 16,
									paddingVertical: 7,
								}}>
								<Image
									source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
									resizeMode={"stretch"}
									style={{
										width: 10,
										height: 10,
										marginRight: 2,
									}}
								/>
								<Text
									style={{
										color: "#ffffff",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"4.0"}
								</Text>
							</View>
						</ImageBackground> */}
					</View>
					{/* <View
						style={{
							position: "absolute",
							top: 28,
							right: 0,
							width: 375,
							height: 99,
							backgroundColor: "#ffffff",
							borderRadius: 24,
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
								marginTop: 26,
								marginBottom: 7,
								marginHorizontal: 57,
							}}>
							<Image
								source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
								resizeMode={"stretch"}
								style={{
									width: 19,
									height: 20,
								}}
							/>
							<Image
								source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
								resizeMode={"stretch"}
								style={{
									width: 20,
									height: 19,
								}}
							/>
							<Image
								source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
								resizeMode={"stretch"}
								style={{
									width: 19,
									height: 20,
								}}
							/>
							<Image
								source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
								resizeMode={"stretch"}
								style={{
									width: 17,
									height: 20,
								}}
							/>
						</View>
						<View
							start={{ x: 0.6444445072129816, y: -0.2537311643938107 }}
							end={{ x: 0.28412699767542837, y: 1.1417910943734544 }}
							colors={["#c67c4e", "#ecaa81"]}
							style={{
								width: 10,
								height: 5,
								borderRadius: 18,
								marginBottom: 7,
								marginHorizontal: 62,
							}}>
						</View>
						<View
							style={{
								backgroundColor: "#ffffff",
								paddingHorizontal: 120,
							}}>
							<View
								style={{
									height: 5,
									backgroundColor: "#0000004D",
									borderRadius: 2.5,
									marginTop: 19,
								}}>
							</View>
						</View>
					</View> */}
				</View>
				<View style={styles.container}>
					<View style={styles.item}>
						<View style={styles.sale}>
							<Text style={{ color: 'yellow', frontWeight:10}}>Giảm 30%</Text>
						</View>
						<Image source={{ uri: 'https://sohanews.sohacdn.com/2016/photo-1-1471603827265.jpg' }} style={{ width: '100%', height: 150 }} />
						<View style={styles.dess}>
							<Text style={styles.dess_text}>Lampoghini</Text>
						</View>
						<View style={styles.ha}>
							<TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
								<Text style={styles.loginText} >Chi tiết</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.addBtn} onPress={onDetail}>
								<Text style={styles.addText} >Thêm vào giỏ</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.item}>
						<View style={styles.sale}>
							<Text style={{ color: 'yellow', frontWeight:10}}>Giảm 30%</Text>
						</View>
						<Image source={{ uri: 'https://jes.edu.vn/wp-content/uploads/2017/08/do-an-nhat.jpg' }} style={{ width: '100%', height: 150 }} />
						<View style={styles.dess}>
							<Text style={styles.dess_text}>Lampoghini</Text>
						</View>
						<View style={styles.ha}>
							<TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
								<Text style={styles.loginText} >Chi tiết</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.addBtn} onPress={onDetail}>
								<Text style={styles.addText} >Thêm vào giỏ</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.item}>
						<View style={styles.sale}>
							<Text style={{ color: 'yellow', frontWeight:10}}>Giảm 30%</Text>
						</View>
						<Image source={{ uri: 'https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/04_2021/Spaghetti.jpg' }} style={{ width: '100%', height: 150 }} />
						<View style={styles.dess}>
							<Text style={styles.dess_text}>Lampoghini</Text>
						</View>
						<View style={styles.ha}>
							<TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
								<Text style={styles.loginText} >Chi tiết</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.addBtn} onPress={onDetail}>
								<Text style={styles.addText} >Thêm vào giỏ</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.item}>
						<View style={styles.sale}>
							<Text style={{ color: 'yellow', frontWeight:10}}>Giảm 30%</Text>
						</View>
						<Image source={{ uri: 'https://eutravel.ch/wp-content/uploads/2019/11/top-10-mon-an-ngon-noi-tieng-nhat-o-y-7.jpg' }} style={{ width: '100%', height: 150 }} />
						<View style={styles.dess}>
							<Text style={styles.dess_text}>Lampoghini</Text>
						</View>
						<View style={styles.ha}>
							<TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
								<Text style={styles.loginText} >Chi tiết</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.addBtn} onPress={onDetail}>
								<Text style={styles.addText} >Thêm vào giỏ</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.item}>
						<View style={styles.sale}>
							<Text style={{ color: 'yellow', frontWeight:10}}>Giảm 30%</Text>
						</View>
						<Image source={{ uri: 'https://sohanews.sohacdn.com/thumb_w/660/2015/mon-ramen-ngon-nhat-nhat-ban-1435740154572-0-0-255-500-crop-1435740606721.jpg' }} style={{ width: '100%', height: 150 }} />
						<View style={styles.dess}>
							<Text style={styles.dess_text}>Lampoghini</Text>
						</View>
						<View style={styles.ha}>
							<TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
								<Text style={styles.loginText} >Chi tiết</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.addBtn} onPress={onDetail}>
								<Text style={styles.addText} >Thêm vào giỏ</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.item}>
						<View style={styles.sale}>
							<Text style={{ color: 'yellow', frontWeight:10}}>Giảm 30%</Text>
						</View>
						<Image source={{ uri: 'http://www.elle.vn/wp-content/uploads/2017/09/15/Taco-Mexico.jpg' }} style={{ width: '100%', height: 150 }} />
						<View style={styles.dess}>
							<Text style={styles.dess_text}>Lampoghini</Text>
						</View>
						<View style={styles.ha}>
							<TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
								<Text style={styles.loginText} >Chi tiết</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.addBtn} onPress={onDetail}>
								<Text style={styles.addText} >Thêm vào giỏ</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.item}>
						<View style={styles.sale}>
							<Text style={{ color: 'yellow', frontWeight:10}}>Giảm 30%</Text>
						</View>
						<Image source={{ uri: 'http://www.elle.vn/wp-content/uploads/2017/09/15/13.jpg' }} style={{ width: '100%', height: 150 }} />
						<View style={styles.dess}>
							<Text style={styles.dess_text}>Lampoghini</Text>
						</View>
						<View style={styles.ha}>
							<TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
								<Text style={styles.loginText} >Chi tiết</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.addBtn} onPress={onDetail}>
								<Text style={styles.addText} >Thêm vào giỏ</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.item}>
						<View style={styles.sale}>
							<Text style={{ color: 'yellow', frontWeight:10}}>Giảm 30%</Text>
						</View>
						<Image source={{ uri: 'http://www.elle.vn/wp-content/uploads/2017/09/15/Th%E1%BB%8Bt-x%C3%B4ng-kh%C3%B3i-Montreal.jpg' }} style={{ width: '100%', height: 150 }} />
						<View style={styles.dess}>
							<Text style={styles.dess_text}>Lampoghini</Text>
						</View>
						<View style={styles.ha}>
							<TouchableOpacity style={styles.loginBtn} onPress={onDetail}>
								<Text style={styles.loginText} >Chi tiết</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.addBtn} onPress={onCart}>
								<Text style={styles.addText} >Thêm vào giỏ</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<Footer></Footer>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	item: {
		width: '45%',
		justifyContent: 'space-between',
	},
	dess: {
		backgroundColor: '#33CC33',
		paddingVertical: 8
	},
	dess_text: {
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	sale: {
		backgroundColor: 'rgb(255, 0, 0)',
		width: 50,
		height: 35,
		position: 'absolute',
		top: 0,
		zIndex: 1000,
		padding: 7,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 130
	},
	loginBtn: {
		width: "30%",
		borderRadius: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFFF33",
		marginTop: 10,
	},
	ha: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	addBtn:{
		width: "30%",
		borderRadius: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3366FF",
		marginTop: 10,
	},
	loginText:{
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 11
	},
	addText:{
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 11
	}
})
