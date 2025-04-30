import { UseIcoStore, UseIcoUserStore } from "@/store/useIcoStore";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export const Profile = () => {
  const [image, setImage] = useState("");
  const { ico } = UseIcoStore();
  const { userIco } = UseIcoUserStore();

  const PickImage = async () => {
    const perrmisson = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (perrmisson.granted === false) {
      return alert("Permission to access camera roll is required!");
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Только изображения
      allowsEditing: true, // Разрешить редактирование
      aspect: [4, 3], // Соотношение сторон
      quality: 1, // Качество изображения
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Сохраняем URI выбранного изображения
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: 150,
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        padding: 10,
        position: "relative",
      }}
    >
      <Text style={{ position: "absolute", left: 10, top: 10 }}>@morteit</Text>
      <View
        style={{
          width: 184,
          height: 131,
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 184,
            height: 103,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 45,
              height: 103,
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Image style={{ width: 22, height: 22 }} source={ico} />
            <Image
              style={{ width: 22, height: 22, marginRight: 23 }}
              source={ico}
            />
            <Image style={{ width: 22, height: 22 }} source={ico} />
          </View>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, borderRadius: "100%" }}
            />
          ) : (
            <Image
              style={{ width: 100, height: 100, borderRadius: "100%" }}
              source={require("@/assets/images/foto1.jpg")}
            />
          )}
          <View
            style={{
              width: 45,
              height: 103,
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Image style={{ width: 22, height: 22 }} source={ico} />
            <Image
              style={{ width: 22, height: 22, marginLeft: 23 }}
              source={ico}
            />
            <Image style={{ width: 22, height: 22 }} source={ico} />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "black", fontWeight: 500 }}>
            на моем крыле мифрил
          </Text>
          <Image source={userIco} style={{ width: 22, height: 22 }} />
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 47,
          height: 22,
          borderRadius: 6,
          backgroundColor: "black",
          borderWidth: 1,
          borderColor: "white",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 13,
          top: 10,
        }}
      >
        <Text style={{ color: "white" }} onPress={PickImage}>
          изм
        </Text>
      </TouchableOpacity>
    </View>
  );
};
