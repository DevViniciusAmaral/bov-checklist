import React from "react";
import MainNavigator from "./routes";
import * as eva from "@eva-design/eva";
import { theme } from "../application/theme";
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <MainNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
