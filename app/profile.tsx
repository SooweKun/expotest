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
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          backgroundColor: background,
        }}
      >
        <StatusBar barStyle={statusBarStyle} />
      </SafeAreaView>
      <ProfileModule />
    </View>
  );
}
