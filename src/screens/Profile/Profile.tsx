import { useContext } from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AuthProfile from "../../components/AuthProfile/AuthProfile";
import UnAuthProfile from "../../components/UnauthProfile/UnauthProfile";
import { AuthContext } from "../../contexts/authContext";

type NonAuthStackParamList = {
  NotLoggedCheckout: any;
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthCheckoutRoutes: any;
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type NavigationProp = NativeStackScreenProps<NonAuthStackParamList>;

export default function Profile({ navigation }: NavigationProp) {
  const authContext = useContext(AuthContext);

  const onLoginPress = () => {
    navigation.navigate("CartRoutes", {
      screen: "VerifyAuthForCheckout",
      params: { screen: "Login" },
    });
  };

  return (
    <View>
      {authContext.isAuthenticated ? (
        <AuthProfile />
      ) : (
        <UnAuthProfile onLoginPress={onLoginPress} />
      )}
    </View>
  );
}
