import { Animated, View } from "react-native";
import { Header } from "./comonents/header";
import { Content } from "./comonents/contetnt";
import { useState } from "react";
import { Search } from "./comonents/search";

export const ChatModule = () => {
  const [searchHeight] = useState(new Animated.Value(55));
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (event: any) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;

    if (currentScrollY > lastScrollY && currentScrollY > 20) {
      Animated.timing(searchHeight, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else if (currentScrollY < lastScrollY) {
      Animated.timing(searchHeight, {
        toValue: 55,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }

    setLastScrollY(currentScrollY);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <Search searchHeight={searchHeight} />
      <Content handleScroll={handleScroll} />
    </View>
  );
};
