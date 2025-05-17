import { SafeAreaView, View } from "react-native";
import { Archive } from "./components/archive";
import { Header } from "./components/header";

export const ArchiveModule = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <SafeAreaView
        style={{ backgroundColor: "#1a1a1a", height: 54 }}
      ></SafeAreaView>
      <Header />
      <Archive />
    </View>
  );
};
