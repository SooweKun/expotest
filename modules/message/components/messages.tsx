import { useBackgroundStore } from "@/store/useColorStore";
import { useMessageStore } from "@/store/useMessageStore";
import { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Keyboard,
  Pressable,
  Image,
} from "react-native";

interface Props {
  handleOpen: (open: boolean) => void;
}

export const Messages: FC<Props> = ({ handleOpen }) => {
  const { message } = useMessageStore();
  const { background } = useBackgroundStore();
  const [socket, setSocket] = useState(message);

  useEffect(() => {
    setSocket(message);
  }, [message]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ width: "100%", flex: 1, backgroundColor: background }}
      contentContainerStyle={styles.contentContainer}
      onTouchEnd={() => handleOpen(false)}
    >
      <Pressable
        style={{ width: "100%", alignItems: "flex-start", gap: 10 }}
        onPress={() => {
          console.log("Pressable clicked");
          Keyboard.dismiss();
          handleOpen(false);
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            borderRadius: 7,
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 8,
            maxWidth: 170,
          }}
        >
          <Text style={{ color: "white" }}>привет</Text>
        </View>
        <View style={{ borderRadius: 7 }}>
          <Image
            style={{
              width: 170,
              height: 200,
              backgroundColor: "black",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
              alignItems: "center",
              justifyContent: "center",
            }}
            source={require("@/assets/images/image62.png")}
          />
          <Text
            style={{
              color: "white",
              textAlign: "left",
              backgroundColor: "black",
              borderBottomLeftRadius: 7,
              borderBottomRightRadius: 7,
              padding: 6,
              maxWidth: 170,
            }}
          >
            Привет как дела ? чем занимаешься ? что делал вчера ?
          </Text>
        </View>
      </Pressable>
      {socket.map((item, index) => (
        <Pressable
          style={{ width: "100%", alignItems: "flex-end" }}
          onPress={() => {
            console.log("Pressable clicked");
            Keyboard.dismiss();
            handleOpen(false);
          }}
        >
          <View
            key={index}
            style={{
              backgroundColor: "black",
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "flex-start",
              padding: 8,
              maxWidth: 180,
            }}
          >
            <Text style={{ color: "white" }}>{item}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
  },

  contentContainer: {
    padding: 10,
    paddingBottom: 20,
    gap: 10,
  },
});
