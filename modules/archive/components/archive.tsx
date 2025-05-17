import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Card } from "./card";

export const Archive = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} bounces={false}>
        <Card />
      </ScrollView>
      <View style={{ height: 85, backgroundColor: "white" }}>
        <Image
          source={require("@/assets/images/image.png")}
          style={{ flex: 1, width: "100%" }}
        />
      </View>
    </View>
  );
};
