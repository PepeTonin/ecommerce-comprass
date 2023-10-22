import { Text, View } from "react-native";

import { styles } from "./style";
import Button from "../../shared/Button/Button";

interface FooterSummaryProps {
  submitOrderHandler: () => void;
  isSubmitOrderButtonDisabled: boolean;
  totalPrice: number;
  deliveryPrice: number;
}

export default function FooterSummary({
  submitOrderHandler,
  isSubmitOrderButtonDisabled,
  totalPrice,
  deliveryPrice,
}: FooterSummaryProps) {
  function numberToTwoDecimalPlacesString(price: number) {
    return price.toFixed(2).toString().replace(".", ",");
  }

  return (
    <View style={styles.container}>
      <View style={styles.footerTextRow}>
        <Text style={styles.text1}>Order: </Text>
        <Text style={styles.text2}>
          {numberToTwoDecimalPlacesString(totalPrice) + " R$"}
        </Text>
      </View>
      <View style={styles.footerTextRow}>
        <Text style={styles.text1}>Delivery: </Text>
        <Text style={styles.text2}>
          {numberToTwoDecimalPlacesString(deliveryPrice) + " R$"}
        </Text>
      </View>
      <View style={styles.footerTextRow}>
        <Text style={styles.text3}>Summary: </Text>
        <Text style={styles.text4}>
          {numberToTwoDecimalPlacesString(deliveryPrice + totalPrice) + " R$"}
        </Text>
      </View>
      <Button
        style={styles.button}
        title="SUBMIT ORDER"
        onPress={submitOrderHandler}
        disable={isSubmitOrderButtonDisabled}
      />
    </View>
  );
}
