import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style";
import Button from "../../shared/Button/Button";
import { RootState } from "../../../redux/store";
import { cartTotalPriceSelector } from "../../../redux/selectors";

interface BuyButtonProps {
  onBuyPress: () => void;
  isCartEmpty: boolean;
}

interface cartItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
  productQuantity: number;
  productTotalPrice: number;
}

export default function BuyButtonBox(props: BuyButtonProps) {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const cart: cartItemType[] = useSelector((state: RootState) => state.cart);
  const cartTotalPrice: number = useSelector(cartTotalPriceSelector);

  useEffect(() => {
    setTotalAmount(cartTotalPrice);
  }, [cart]);

  function numberToTwoDecimalPlacesString(price: number) {
    return price.toFixed(2).toString().replace(".", ",");
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.totalAmountText}>Total amount:</Text>
        <Text style={styles.priceAmountText}>
          {numberToTwoDecimalPlacesString(totalAmount) + " R$"}
        </Text>
      </View>
      <Button
        title="BUY"
        onPress={props.onBuyPress}
        disable={props.isCartEmpty || totalAmount === 0}
        style={styles.button}
      />
    </View>
  );
}
