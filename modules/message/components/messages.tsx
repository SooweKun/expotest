import { useMessageStore } from "@/store/useMessageStore";
import { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Keyboard,
  Pressable,
} from "react-native";

interface Props {
  handleOpen: (open: boolean) => void;
}

export const Messages: FC<Props> = ({ handleOpen }) => {
  const { message } = useMessageStore();
  const [socket, setSocket] = useState(message);

  useEffect(() => {
    setSocket(message);
  }, [message]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      onTouchEnd={() => handleOpen(false)}
    >
      <Pressable
        style={{ width: "100%", alignItems: "flex-start" }}
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
          }}
        >
          <Text style={{ color: "white" }}>привет</Text>
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
    backgroundColor: "#fff",
  },

  contentContainer: {
    padding: 10,
    paddingBottom: 20,
    gap: 10,
  },
});
