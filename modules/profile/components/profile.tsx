import { UseIcoStore, UseIcoUserStore } from "@/store/useIcoStore";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useBackgroundStore } from "@/store/useColorStore";
import { Link } from "@/assets/images/link";
import { OnlineTrecker } from "./onlineTrecker";

export const Profile = () => {
  const [image, setImage] = useState("");
  const { ico } = UseIcoStore();
  const { userIco } = UseIcoUserStore();
  const { background } = useBackgroundStore();

  const PickImage = async () => {
    const perrmisson = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (perrmisson.granted === false) {
      return alert("Permission to access camera roll is required!");
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        height: 227,
        backgroundColor: background,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            backgroundColor: "rgba(240, 240, 240, 0.4);",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={PickImage}
          style={{
            width: 55,
            height: 32,
            borderRadius: 15,
            backgroundColor: "rgba(240, 240, 240, 0.4);",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: 500 }}>Изм.</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 325,
            justifyContent: "space-between",
            flexDirection: "row",
            gap: 15,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 25,
              alignItems: "flex-end",
              flex: 1,
              paddingLeft: 20,
            }}
          >
            <Image source={ico} style={{ width: 20, height: 20 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingRight: 15,
              }}
            >
              <Image source={ico} style={{ width: 20, height: 20 }} />
              <Image source={ico} style={{ width: 20, height: 20 }} />
            </View>
            <Image source={ico} style={{ width: 20, height: 20 }} />
          </View>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 10,
              position: "relative",
            }}
          >
            <OnlineTrecker className={{width: 22, height: 22}}/>
            <Image
              source={{ uri: image ? image : ico }}
              style={{
                width: 100,
                height: 100,
                backgroundColor: "gray",
                borderRadius: 7,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: 25,
              alignItems: "flex-start",
              flex: 1,
              paddingRight: 20,
            }}
          >
            <Image source={ico} style={{ width: 20, height: 20 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingLeft: 15,
              }}
            >
              <Image source={ico} style={{ width: 20, height: 20 }} />
              <Image source={ico} style={{ width: 20, height: 20 }} />
            </View>
            <Image source={ico} style={{ width: 20, height: 20 }} />
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 10,
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: 600 }}>ведьма.</Text>
        {userIco ? (
          <Image source={userIco} style={{ width: 20, height: 20 }} />
        ) : null}
      </View>
    </View>
  );
};
