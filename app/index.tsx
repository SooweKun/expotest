import { Search } from "@/modules/chat/comonents/search";
import { useBackgroundStore } from "@/store/useColorStore";
import { UseIcoStore } from "@/store/useIcoStore";
import { SafeAreaView, StatusBar, Text, View, Image } from "react-native";

const darkColors = ["#90132F", "#1A477D", "#000000", "#1C621B"];

export default function Index() {
  const { background } = useBackgroundStore();
  const { ico } = UseIcoStore();
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
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: 50,
          backgroundColor: background,
          flexDirection: "row",
          gap: 10,
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          paddingRight: 10,
          paddingLeft: 10,
        }}
      >
        <View
          style={{ width: 25, height: 25, backgroundColor: "black" }}
        ></View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ fontWeight: 600 }}>Chat</Text>
          <Image source={ico} style={{ width: 17, height: 17 }} />
        </View>
        <Search />
      </View>
      <View></View>
    </SafeAreaView>
  );
}
