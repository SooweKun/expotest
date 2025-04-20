import { useColorStore } from "@/store/useColorStore";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";

const CollorArr = [{ color: "red" }, { color: "blue" }, { color: "green" }];

export default function Settings() {
  const { setColor } = useColorStore();

  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>settings</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {CollorArr.map(({ color }, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setColor(color)}
            style={{
              backgroundColor: color,
              width: 25,
              height: 25,
              borderRadius: 50,
              borderColor: "black",
              borderWidth: 1,
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
