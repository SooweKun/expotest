import { Change } from "@/assets/images/change";
import { ColorPicker } from "@/modules/settings/components/colorPiker";
import { Profile } from "@/modules/settings/components/profile";
import { useBackgroundStore } from "@/store/useColorStore";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const darkColors = ["#90132F", "#1A477D", "#000000", "#1C621B"];

export default function Settings() {
  const { background } = useBackgroundStore();
  const statusBarStyle = darkColors.includes(background)
    ? "light-content"
    : "dark-content";

  return (
    <SafeAreaView
      style={{
        backgroundColor: background,
      }}
    >
      <StatusBar barStyle={statusBarStyle} />
      <Profile />
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: background,
          display: "flex",
          alignItems: "center",
          padding: 20,
          gap: 20,
        }}
      >
        <ColorPicker />
        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "black",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 7,
            padding: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 17,
            paddingLeft: 18,
          }}
        >
          <Change />
          <Text style={{ color: "white", fontWeight: 500, fontSize: 16 }}>
            Изменить имя
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
