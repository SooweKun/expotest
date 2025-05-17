import { UseIcoStore, UseIcoUserStore } from "@/store/useIcoStore";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useBackgroundStore } from "@/store/useColorStore";
import { OnlineTrecker } from "@/modules/profile/components/onlineTrecker";
import { Back } from "@/assets/images/back";
import { useRouter } from "expo-router";
import { Call } from "@/assets/images/call";
import { Sound } from "@/assets/images/sound";
import { SearchIco } from "@/assets/images/search";
import { More } from "@/assets/images/more";

const Y = [
  {
    name: "звонок",
    img: <Call />,
  },
  {
    name: "звук",
    img: <Sound />,
  },
  {
    name: "поиск",
    img: <SearchIco fill={"black"} />,
  },
  {
    name: "ещё",
    img: <More />,
  },
];

export const Profile = () => {
  const { ico } = UseIcoStore();
  const { userIco } = UseIcoUserStore();
  const { background } = useBackgroundStore();
  const router = useRouter();

  return (
    <View
      style={{
        height: 277,
        backgroundColor: background,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => router.push("/chat")}
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            backgroundColor: "rgba(240, 240, 240, 0.4);",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Back />
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
            <OnlineTrecker className={{ width: 22, height: 22 }} />
            <Image
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
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: 600 }}>ведьма.</Text>
        {userIco ? (
          <Image source={userIco} style={{ width: 20, height: 20 }} />
        ) : null}
      </View>
      <View style={{ flexDirection: "row", gap: 5, marginTop: 15 }}>
        {Y.map(({ name, img }, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 82.32,
              height: 59,
              borderRadius: 15,
              backgroundColor: "#d9d9d9",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            {img}
            <Text style={{ fontSize: 12, fontWeight: 500 }}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
