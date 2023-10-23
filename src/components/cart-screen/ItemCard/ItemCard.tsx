import React, { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  removeItem,
} from "../../../redux/features/cart/cartSlice";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";
import { Pressable } from "react-native";

interface Props {
  id: number;
  img: string;
  name: string;
  unitPrice: number;
  totalPrice: number;
  style?: {};
}

interface cartItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
  productQuantity: number;
  productTotalPrice: number;
}

export default function ItemCard({
  id,
  img,
  name,
  unitPrice,
  totalPrice,
  style,
}: Props) {
  const [amountCard, setAmountCard] = useState(0);
  const [totalPriceCard, setTotalPriceCard] = useState(totalPrice);

  const cart: cartItemType[] = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPriceCard(amountCard * unitPrice);
  }, [amountCard]);

  useEffect(() => {
    cart.forEach((item) => {
      if (item.id === id) {
        setAmountCard(item.productQuantity);
      }
    });
  }, [cart]);

  function onPressMinus() {
    if (amountCard === 0) {
      return;
    }
    dispatch(decrement(id));
    setAmountCard((cur) => cur - 1);
  }

  function onPressPlus() {
    dispatch(increment(id));
    setAmountCard((cur) => cur + 1);
  }

  function numberToTwoDecimalPlacesString(price: number) {
    return price.toFixed(2).toString().replace(".", ",");
  }

  function deleteHandler() {
    dispatch(removeItem(id));
  }

  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: img }} style={styles.img} />
      <View style={styles.containerInformation}>
        <View style={styles.innerContainerTop}>
          <Text style={styles.name}>{name}</Text>
          <Pressable onPress={deleteHandler} style={styles.iconContainer}>
            <Image
              source={require("../../../assets/app-images/TrashIcon.png")}
            />
          </Pressable>
        </View>
        <View style={styles.innerContainerDown}>
          <View style={styles.amounContainer}>
            <Pressable
              accessibilityHint="Will Decrease"
              onPress={onPressMinus}
              style={styles.amountIcon}
            >
              <Entypo name="minus" size={24} color={colors.white} />
            </Pressable>
            <Text style={styles.amountText}>{amountCard}</Text>
            <Pressable
              accessibilityHint="Will Increase"
              onPress={onPressPlus}
              style={styles.amountIcon}
            >
              <Entypo name="plus" size={24} color={colors.white} />
            </Pressable>
          </View>
          <Text style={styles.price}>
            {numberToTwoDecimalPlacesString(totalPriceCard)} R$
          </Text>
        </View>
      </View>
      <Text></Text>
    </View>
  );
}
