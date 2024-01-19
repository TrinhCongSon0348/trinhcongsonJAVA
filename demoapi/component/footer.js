import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <StatusBar style="auto" />
      <Image
        source={{ uri: "https://banner2.cleanpng.com/20180710/hev/kisspng-fast-food-junk-food-cuisine-logo-brand-5b45397f22d258.9777016815312633591426.jpg" }}
        resizeMode={"stretch"}
        style={{
          width: 30,
          height: 30,
          marginTop: 10,
          marginBottom: 10,
          marginLeft:'45%'
        }}
      />
      <View
        style={{
          backgroundColor: "#0a1829",
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
            marginHorizontal: 21,
          }}>

          <Text
            style={{
              color: "#ffffff",
              fontSize: 12,
              fontWeight: "bold",
              marginRight: 143,
              
            }}>
            {"Về chúng tôi"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            marginHorizontal: 21,
          }}>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 9,
              fontWeight: "bold",
              marginRight: 4,
              flex: 1,
            }}>
            {"Giới thiệu"}
          </Text>
        </View>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 9,
            fontWeight: "bold",
            marginBottom: 7,
            marginLeft: 21,
          }}>
          {"Chính sách"}
        </Text>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 9,
            fontWeight: "bold",
            marginBottom: 4,
            marginLeft: 21,
          }}>
          {"Điều khoản"}
        </Text>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 9,
            fontWeight: "bold",
            marginBottom: 4,
            marginLeft: 21,
          }}>
          {"Tư vấn & hỗ trợ khách hàng"}
        </Text>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 9,
            fontWeight: "bold",
            marginBottom: 4,
            marginLeft: 21,
            marginTop: 15
          }}>
          {"Đánh giá và phản hồi"}
        </Text>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 9,
            fontWeight: "bold",
            marginBottom: 1,
            marginLeft: 21,
            marginTop: 20,
            textAlign: 'center'
          }}>
          {"Theo dõi chúng tôi trên"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 22,
            marginHorizontal: 22,
            marginLeft: '40%'
          }}>
          <Image
            source={{ uri: "https://toppng.com/uploads/preview/facebook-icon-facebook-icon-red-11563140071g3x2ama4cd.png" }}
            resizeMode={"stretch"}
            style={{
              width: 12,
              height: 12,
              marginRight: 18,
            }}
          />
          <Image
            source={{ uri: "https://toppng.com/public/uploads/preview/youtube-icon-11530957521wju7yhmwky.png" }}
            resizeMode={"stretch"}
            style={{
              width: 12,
              height: 10,
              marginRight: 18,
            }}
          />
          <Image
            source={{ uri: "https://www.vhv.rs/dpng/d/404-4049061_tiktok-social-media-icons-tiktok-logo-transparent-hd.png" }}
            resizeMode={"stretch"}
            style={{
              width: 11,
              height: 11,
              marginRight: 19,
            }}
          />
          <Image
            source={{ uri: "https://banner2.kisspng.com/20180327/prq/kisspng-computer-icons-instagram-logo-sticker-logo-5abaca2a2642d0.7272687915221908901567.jpg" }}
            resizeMode={"stretch"}
            style={{
              width: 11,
              height: 11,
              marginRight: 19,
            }}
          />
        </View>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 9,
            fontWeight: "bold",
            marginLeft: 21,
          }}>
          {"Chúng tôi sẽ cố gắng đem đến cho quý khách trãi nghiệm tuyệt vời cùng FoodForest"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 300,
    position: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0a1829',
  },
});
