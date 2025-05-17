import { ProfileIco } from "@/assets/images/profileIco";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Send } from "./components/Send";
import { Messages } from "./components/messages";
import { useState } from "react";
import { Header } from "./components/header";

export const MessageModule = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (open: boolean) => {
    console.log(open, "handleOpen");
    setOpen(open);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Messages handleOpen={handleOpen} />
      </View>
      <Send handleOpen={handleOpen} open={open} />
    </View>
  );
};
