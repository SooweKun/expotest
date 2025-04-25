import { useBackgroundStore } from "@/store/useColorStore";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { ProfileModule } from "@/modules/profile/Module";

const darkColors = ["#90132F", "#1A477D", "#000000", "#1C621B"];

export default function ProfilePage() {
  const { background } = useBackgroundStore();
  const statusBarStyle = darkColors.includes(background)
    ? "light-content"
    : "dark-content";

  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background,
      }}
    >
      <StatusBar barStyle={statusBarStyle} />
      <View
        style={{
          backgroundColor: background,
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <ProfileModule />
      </View>
    </SafeAreaView>
  );
}
