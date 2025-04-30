import { Content } from "@/modules/chat/comonents/contetnt";
import { Search } from "@/modules/chat/comonents/search";
import { useBackgroundStore } from "@/store/useColorStore";
import { UseIcoStore, UseIcoUserStore } from "@/store/useIcoStore";
import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

const darkColors = ["#90132F", "#1A477D", "#000000", "#1C621B"];

export default function Index() {
  const [open, setOpen] = useState(false);
  const { background } = useBackgroundStore();
  const { userIco } = UseIcoUserStore();
  const statusBarStyle = darkColors.includes(background)
    ? "light-content"
    : "dark-content";

  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <Pressable onPress={handleOpen}>
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
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: 33,
              height: 33,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("@/assets/images/archive.png")}
              style={{ width: 23, height: 23 }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ fontWeight: 600 }}>Chat</Text>
            <Image source={userIco} style={{ width: 17, height: 17 }} />
          </View>
          <Search open={open} setOpen={setOpen} />
        </View>
        <View style={{ width: "100%", height: "95%" }}>
          <Content />
        </View>
      </SafeAreaView>
    </Pressable>
  );
}
