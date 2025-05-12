import { Change } from "@/assets/images/change";
import { Emogi } from "@/assets/images/emogi";
import { Icon } from "@/assets/images/icon";
import { useColorStore } from "@/store/useColorStore";
import { TouchableOpacity, View, Text, Image } from "react-native";

export const Content = () => {
  const { color } = useColorStore();

  return (
    <View style={{ gap: 15 }}>
      <View
        style={{
          height: 95,
          backgroundColor: "#1a1a1a",
          borderRadius: 7,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 12,
            alignItems: "center",
          }}
        >
          <Icon color={color} />

          <Text style={{ color: color ? color : "white" }}>сменить иконку</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 299,
            height: 0.5,
            backgroundColor: color ? color : "white",
          }}
        ></View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 8,
            alignItems: "center",
          }}
        >
          <Emogi color={color} />
          <Text style={{ color: color ? color : "white" }}>
            сменить эмоджи-статус
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 95,
          backgroundColor: "#1a1a1a",
          borderRadius: 7,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: color ? color : "white", fontSize: 24 }}>
            @
          </Text>
          <Text style={{ color: color ? color : "white" }}>изменить uid</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 299,
            height: 0.5,
            backgroundColor: color ? color : "white",
          }}
        ></View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 47.5,
            flexDirection: "row",
            paddingLeft: 20,
            gap: 8,
            alignItems: "center",
          }}
        >
          <Change color={color} />
          <Text style={{ color: color ? color : "white" }}>изменить имя</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
