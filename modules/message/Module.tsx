import { ProfileIco } from "@/assets/images/profileIco";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import { Send } from "./components/Send";
import { Messages } from "./components/messages";
import { useState } from "react";

export const MessageModule = () => {
  const [open, setOpen] = useState(false);
  const { title } = useLocalSearchParams();
  const router = useRouter();

  const handleOpen = (open: boolean) => {
    console.log(open, "handleOpen");
    setOpen(open);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <View
          style={{
            height: 65,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            borderBottomWidth: 1,
            borderBottomColor: "black",
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/chat")}
            style={{
              width: 70,
              height: 33,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Text>Назад</Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 220,
            }}
          >
            <Text style={{ marginRight: 30 }}>{title}</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 33,
              height: 33,
              backgroundColor: "black",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ProfileIco focused={false} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Pressable
        style={{ flex: 1, alignItems: "flex-start" }}
        onPress={() => {
          console.log("Pressable clicked");
          Keyboard.dismiss();
          handleOpen(false);
        }}
      >
        <Messages />
      </Pressable>
      <Send handleOpen={handleOpen} open={open} />
    </View>
  );
};
