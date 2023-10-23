import { useState, useEffect, useContext } from "react";
import { View, FlatList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { fetchCategories } from "../../util/apiRequests";
import HomeSection from "../../components/home-screen/HomeSection/HomeSection";
import { styles } from "./style";
import HomeHeader from "../../components/home-screen/HomeHeader/HomeHeader";
import SearchButton from "../../components/home-screen/SearchButton/SearchButton";
import HomeProfileHeader from "../../components/home-screen/HomeProfileHeader/HomeProfileHeader";
import Splash from "../Splash/Splash";
import ErrorMessage from "../../components/shared/ErrorMessage/ErrorMessage";
import { AuthContext } from "../../contexts/authContext";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type HomeScreenNavigationProp = NativeStackScreenProps<StackParamList>;

interface ItemData {
  id: number;
  name: string;
}

interface NavigationParams {
  forceRerender: boolean;
}

export default function Home({ navigation, route }: HomeScreenNavigationProp) {
  const [initializing, setInitializing] = useState<boolean>();
  const [initializedWithError, setInitializedWithError] = useState<boolean>();
  const [data, setData] = useState<ItemData[]>([]);

  const authContext = useContext(AuthContext);

  async function getCategories() {
    try {
      const response = await fetchCategories();
      setData(response);
      setInitializedWithError(false);
      setInitializing(false);
    } catch (error) {
      setInitializedWithError(true);
    }
  }

  useEffect(() => {
    setInitializing(true);
    getCategories();
  }, [route.params]);

  function onCardPress(id: number) {
    navigation.navigate("HomeRoutes", {
      screen: "ProductDetails",
      params: { productId: id },
    });
  }

  if (initializing) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      {!initializing && !initializedWithError && (
        <>
          <View style={styles.stickyHeader}>
            {authContext.isAuthenticated ? (
              <HomeProfileHeader
                userImageUrl={authContext.user.avatar}
                userName={authContext.user.name}
              />
            ) : null}

            <SearchButton onCardPress={onCardPress} />
          </View>

          <FlatList
            style={{ zIndex: -1 }}
            ListHeaderComponent={HomeHeader}
            ListFooterComponent={<View></View>}
            ListFooterComponentStyle={{ marginVertical: 15 }}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              initializing ? (
                <Splash />
              ) : (
                <HomeSection
                  onCardPress={onCardPress}
                  categoryId={item.id}
                  categoryName={item.name}
                />
              )
            }
          />
        </>
      )}
      {!initializing && initializedWithError && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ErrorMessage />
        </View>
      )}
    </View>
  );
}
