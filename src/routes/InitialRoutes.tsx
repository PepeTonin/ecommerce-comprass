import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabRoutes from "./BottomTabRoutes";
import HomeRoutes from "./HomeRoutes";
import CartRoutes from "./CartRoutes";
import { AuthContext } from "../contexts/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function InitialRoutes() {
  const authContext = useContext(AuthContext);

  const tryToGetDeviceToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      authContext.loginWithToken(token);
    }
  };

  useEffect(() => {
    tryToGetDeviceToken();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabRoutes" component={BottomTabRoutes} />
      <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
      <Stack.Screen name="CartRoutes" component={CartRoutes} />
    </Stack.Navigator>
  );
}
