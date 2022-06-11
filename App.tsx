import React from "react";
import { ThemeProvider } from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";

import {
  useFonts,
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
} from "@expo-google-fonts/baloo-bhai-2";

import theme from "./src/global/styles/theme";
import Home from "./src/pages/Home";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    BalooBhai2_400Regular,
    BalooBhai2_500Medium,
    BalooBhai2_600SemiBold,
    BalooBhai2_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        animated={true}
        barStyle={"dark-content"}
        backgroundColor={"white"}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}
