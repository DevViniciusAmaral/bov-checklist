import React from "react";
import MainNavigator from "./routes";
import { theme } from "../application/theme";
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <MainNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
