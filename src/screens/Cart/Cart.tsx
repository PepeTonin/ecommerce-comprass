import { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { styles } from "./style";
import ItemCard from "../../components/cart-screen/ItemCard/ItemCard";
import BuyButtonBox from "../../components/cart-screen/BuyButtonBox/BuyButtonBox";
import EmptyCartAlert from "../../components/cart-screen/EmptyCartAlert/EmptyCartAlert";
import { RootState } from "../../redux/store";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

interface cartItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
  productQuantity: number;
  productTotalPrice: number;
}

type CartScreenNavigationProp = NativeStackScreenProps<StackParamList>;

export default function Cart({ navigation }: CartScreenNavigationProp) {
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true);
  
  const cart: cartItemType[] = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (cart.length === 0) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  }, [cart]);

  function onBuyPress() {
    navigation.navigate("CartRoutes");
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Cart</Text>
      </View>
      {isCartEmpty && <EmptyCartAlert />}
      {!isCartEmpty && (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ItemCard
              id={item.id}
              img={item.images[0]}
              name={item.productName}
              unitPrice={item.productUnitPrice}
              totalPrice={item.productTotalPrice}
            />
          )}
        />
      )}

      <BuyButtonBox onBuyPress={onBuyPress} isCartEmpty={isCartEmpty} />
    </View>
  );
}
