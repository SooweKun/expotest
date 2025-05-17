import { useColorStore } from "@/store/useColorStore";
import { View, Text } from "react-native";

export const Content = () => {
  const { color } = useColorStore();

  return (
    <View style={{ width: 100, padding: 15 }}>
      <View
        style={{
          paddingLeft: 31,
          paddingRight: 31,
          paddingTop: 20,
          gap: 18,
          backgroundColor: "#1a1a1a",
          width: 362,
          height: 263,
          maxHeight: 393,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 47.5,
            borderBottomWidth: 1,
            borderBottomColor: color,
            gap: 5,
          }}
        >
          <Text style={{ color: "white" }}>email:</Text>
          <Text style={{ color: "white", fontSize: 17 }}>
            enemytest@mail.ru
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 47.5,
            borderBottomWidth: 1,
            borderBottomColor: color,
            gap: 5,
          }}
        >
          <Text style={{ color: "white" }}>user name:</Text>
          <Text style={{ color: color, fontSize: 17 }}>@enemy</Text>
        </View>
        <View
          style={{
            width: "100%",
            maxHeight: 100,
            borderBottomWidth: 1,
            borderBottomColor: color,
            gap: 5,
            paddingBottom: 5,
          }}
        >
          <Text style={{ color: "white" }}>description:</Text>
          <Text style={{ color: "white", fontSize: 17 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eaque et natus repellendus.
          </Text>
        </View>
      </View>
    </View>
  );
};
