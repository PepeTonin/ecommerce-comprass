import { Text, Image, Pressable } from "react-native";

import { styles } from "./style";
import CheckedBadge from "../../shared/CheckedBadge/CheckedBadge";

interface DeliveryMethodData {
  logoImage: string;
  deliveryPrice: number;
  deliveryTime: { minDays: number; maxDays: number };
}

interface DeliveryMethodCardProps {
  index: number;
  deliveryMethodData: DeliveryMethodData;
  pressHandler: (index: number, deliveryMethod: DeliveryMethodData) => void;
  isClicked: boolean;
}

export default function DeliveryMethodCard({
  index,
  deliveryMethodData,
  isClicked,
  pressHandler,
}: DeliveryMethodCardProps) {
  function numberToTwoDecimalPlacesString(number: number) {
    return number.toFixed(2).toString().replace(".", ",");
  }

  return (
    <Pressable
      onPress={() =>
        pressHandler(index, {
          logoImage: deliveryMethodData.logoImage,
          deliveryPrice: deliveryMethodData.deliveryPrice,
          deliveryTime: {
            minDays: deliveryMethodData.deliveryTime.minDays,
            maxDays: deliveryMethodData.deliveryTime.maxDays,
          },
        })
      }
      style={styles.container}
    >
      {isClicked && (
        <CheckedBadge
          style={{ position: "absolute", top: -5, right: -5, zIndex: 100 }}
        />
      )}
      <Image
        style={styles.image}
        source={{ uri: deliveryMethodData.logoImage }}
      />
      <Text style={styles.deliveryTimeText}>
        {deliveryMethodData.deliveryTime.minDays}-
        {deliveryMethodData.deliveryTime.maxDays} days
      </Text>
      <Text style={styles.deliveryPriceText}>
        {numberToTwoDecimalPlacesString(deliveryMethodData.deliveryPrice)} R$
      </Text>
    </Pressable>
  );
}
