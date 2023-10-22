import { useState } from "react";
import { Text, View, ViewStyle, FlatList } from "react-native";

import { styles } from "./style";
import DeliveryMethodCard from "../DeliveryMethodCard/DeliveryMethodCard";

interface DeliveryMethodProps {
  outerContainerStyle?: ViewStyle;
  deliveryMethods: DeliveryMethodData[];
  retrieveDeliveryData: (deliveryData: DeliveryMethodData) => void;
}

interface DeliveryMethodData {
  logoImage: string;
  deliveryPrice: number;
  deliveryTime: { minDays: number; maxDays: number };
}

export default function DeliveryMethod({
  outerContainerStyle,
  deliveryMethods,
  retrieveDeliveryData,
}: DeliveryMethodProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );
  const [deliveryMethodData, setDeliveryMethodData] = useState<
    DeliveryMethodData | undefined
  >(undefined);

  function pressHandler(index: number, deliveryMethod: DeliveryMethodData) {
    setSelectedIndex(index);
    setDeliveryMethodData(deliveryMethod);
    retrieveDeliveryData(deliveryMethod);
  }

  return (
    <View style={outerContainerStyle}>
      <Text style={styles.title}>Delivery method</Text>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={true}
          horizontal
          data={deliveryMethods}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <DeliveryMethodCard
              index={index}
              deliveryMethodData={item}
              pressHandler={pressHandler}
              isClicked={index === selectedIndex ? true : false}
            />
          )}
        />
      </View>
    </View>
  );
}
