import { SearchIco } from "@/assets/images/search";
import { FC, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Search: FC<Props> = ({ setOpen, open }) => {
  const [searchText, setSearchText] = useState("");

  const handleCLick = () => {
    setOpen(!open);
  };

  return (
    <View
      style={{
        width: open ? 250 : 33,
        height: 33,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "black",
        borderRadius: 4,
      }}
    >
      <TouchableOpacity
        style={{
          width: 33,
          height: 33,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 1,
        }}
        onPress={handleCLick}
      >
        <SearchIco />
      </TouchableOpacity>
      <TextInput
        value={open ? searchText : ""}
        editable={open}
        onChangeText={(text) => setSearchText(text)}
        placeholder={open ? "поиск" : ""}
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 10,
          color: "white",
        }}
      />
    </View>
  );
};
