import React, { FC, useState } from "react";
import { Clip } from "@/assets/images/Clip";
import { SendBtn } from "@/assets/images/SendBtn";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useMessageStore } from "@/store/useMessageStore";

interface Props {
  open: boolean;
  handleOpen: (open: boolean) => void;
}

export const Send: FC<Props> = ({ open, handleOpen }) => {
  const { setMessage } = useMessageStore();
  const [message, setMessageText] = useState("");

  const handleSend = () => {
    setMessage(message);
    setMessageText("");
  };

  return (
    <View
      style={{
        width: "100%",
        height: open ? 360 : 90,
        backgroundColor: "black",
        flexDirection: "row",
        padding: 17,
        alignItems: open ? "flex-start" : "center",
        justifyContent: "space-between",
        gap: 15,
      }}
    >
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 100,
        }}
      >
        <Clip />
      </TouchableOpacity>
      <TextInput
        style={{
          width: 250,
          height: 40,
          backgroundColor: "#1B1717",
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "white",
          paddingLeft: 13,
          color: "white",
        }}
        placeholder="Введите сообщение"
        placeholderTextColor={"white"}
        value={message}
        onChangeText={setMessageText}
        onFocus={() => handleOpen(true)}
      />
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          if (message !== "") {
            handleSend();
          }
        }}
      >
        <SendBtn />
      </TouchableOpacity>
    </View>
  );
};
