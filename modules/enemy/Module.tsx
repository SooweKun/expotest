import { SafeAreaView, View } from "react-native";
import { Profile } from "./components/profile";
import { useBackgroundStore } from "@/store/useColorStore";
import { Content } from "./components/content";

export const EnemyModule = () => {
  const { background } = useBackgroundStore();

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <SafeAreaView style={{ backgroundColor: background, height: 54 }} />
      <Profile />
      <Content />
    </View>
  );
};
