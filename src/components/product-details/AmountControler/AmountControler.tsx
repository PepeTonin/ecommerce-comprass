import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";
import { RootState } from "../../../redux/store";
import {
  addToCart,
  increment,
  decrement,
  removeItem,
} from "../../../redux/features/cart/cartSlice";
import { totalAmountOfAnItemById } from "../../../redux/selectors";

interface AmountControlerProps {
  productId: number;
  productName: string | undefined;
  productPrice: number | undefined;
  images: string[] | undefined;
}

interface cartItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
  productQuantity: number;
  productTotalPrice: number;
}

export default function AmountControler(props: AmountControlerProps) {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const totalAmountOfTheItemInCart: number | undefined = useSelector(
    (state: RootState) => totalAmountOfAnItemById(state, props.productId)
  );

  useEffect(() => {
    if (totalAmountOfTheItemInCart) {
      setAmount(totalAmountOfTheItemInCart);
    }
  }, [totalAmountOfTheItemInCart]);

  function onMinusPress() {
    if (amount === 0) {
      return;
    } else if (amount === 1) {
      dispatch(removeItem(props.productId));
    } else {
      dispatch(decrement(props.productId));
    }
    setAmount((cur) => cur - 1);
  }

  function onPlusPress() {
    if (
      amount === 0 &&
      props.productName !== undefined &&
      props.productPrice !== undefined &&
      props.images !== undefined
    ) {
      dispatch(
        addToCart({
          id: props.productId,
          productName: props.productName,
          productUnitPrice: props.productPrice,
          images: props.images,
        })
      );
    } else {
      dispatch(increment(props.productId));
    }
    setAmount((cur) => cur + 1);
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={onMinusPress} style={styles.minusContainer}>
          <Entypo name="minus" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
        <TouchableOpacity onPress={onPlusPress} style={styles.plusContainer}>
          <Entypo name="plus" size={32} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
