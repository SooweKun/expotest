import { SearchIco } from "@/assets/images/search";
import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

export const Search = () => {
  const [open, setOpen] = useState(false);

  const handleCLick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <View
      style={{
        width: open ? 100 : 33,
        height: 33,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "black",
        borderRadius: 4,
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{
          width: 33,
          height: 33,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchIco />
      </TouchableOpacity>
      <TextInput
        onPress={handleCLick}
        placeholder="поиск"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
    </View>
  );
};
