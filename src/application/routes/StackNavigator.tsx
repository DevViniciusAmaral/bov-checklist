import React from "react";
import { StackParamList } from "./StackParamList";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Home } from "../screens/home";
import { HandleFarm } from "../screens/handle-farm";
import { FarmDetails } from "../screens/farm-details";

const Stack = createStackNavigator<StackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HandleFarm" component={HandleFarm} />
      <Stack.Screen name="FarmDetails" component={FarmDetails} />
    </Stack.Navigator>
  );
}
