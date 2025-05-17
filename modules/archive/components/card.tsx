import { useBackgroundStore, useColorStore } from "@/store/useColorStore";
import { Touchable, TouchableOpacity, View, Image, Text } from "react-native";

export const Card = () => {
  const { color, selectColor } = useColorStore();
  const { background } = useBackgroundStore();

  return (
    <TouchableOpacity
      style={{
        width: 391,
        height: 80,
        backgroundColor: "black",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: 83,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: selectColor ? selectColor : "white",
          shadowOffset: { width: -5, height: -5 },
          shadowOpacity: 0.7,
          shadowRadius: 25,
        }}
      >
        <Image
          style={{
            width: 62,
            height: 62,
            backgroundColor: "#413838",
            borderRadius: 6,
          }}
          source={require("@/assets/images/image.png")}
        />
      </View>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 1,
          borderColor: background ? background : "white",
          paddingLeft: 10,
          paddingRight: 20,
          paddingTop: 6,
        }}
      >
        <Text
          style={{
            color: color ? color : "#9D9D9D",
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Morte
        </Text>
        <Text style={{ color: "white", fontSize: 13, fontWeight: "400" }}>
          description
        </Text>
      </View>
    </TouchableOpacity>
  );
};
