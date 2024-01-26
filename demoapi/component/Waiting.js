import React from "react";
import { View, Text, Image } from "react-native";

const Waiting = () => {
    return (
        <>
            <View>
                <Image
                    source={{ uri: "https://ghechua.net/wp-content/uploads/2022/04/kien-tri-mim-cuoi.jpg" }}
                    style={{width:'100%', height: 500}}
                />
            </View>
        </>
    );
}

export default Waiting;