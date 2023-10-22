import { useState } from "react";
import { Text, View, ViewStyle } from "react-native";

import { styles } from "./style";
import PaymentMethodCard from "../PaymentMethodCard/PaymentMethodCard";

interface PaymentMethodProps {
  outerContainerStyle?: ViewStyle;
  setPaymentMethodHandler: (paymentMethod: typeofPayment) => void;
}

enum typeofPayment {
  card,
  pix,
  bankslip,
}

export default function PaymentMethod({
  outerContainerStyle,
  setPaymentMethodHandler,
}: PaymentMethodProps) {
  const [bankSlipPressed, setBankSlipPressed] = useState(false);
  const [creditCardPressed, setCreditCardPressed] = useState(false);
  const [pixPressed, setPixPressed] = useState(false);

  function onCredirCardSelect() {
    setPaymentMethodHandler(typeofPayment.card);
    setCreditCardPressed(true);
    setBankSlipPressed(false);
    setPixPressed(false);
  }

  function onBankSlipSelect() {
    setPaymentMethodHandler(typeofPayment.bankslip);
    setCreditCardPressed(false);
    setBankSlipPressed(true);
    setPixPressed(false);
  }

  function onPixSelect() {
    setPaymentMethodHandler(typeofPayment.pix);
    setCreditCardPressed(false);
    setBankSlipPressed(false);
    setPixPressed(true);
  }

  return (
    <View style={outerContainerStyle}>
      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.buttonsContainer}>
        <PaymentMethodCard
          description="Credit Card"
          isClicked={creditCardPressed}
          onPressHandler={onCredirCardSelect}
          imageUrl="https://cdn-icons-png.flaticon.com/512/4341/4341764.png"
        />
        <PaymentMethodCard
          description="Pix"
          isClicked={pixPressed}
          onPressHandler={onPixSelect}
          imageUrl="https://logospng.org/download/pix/logo-pix-icone-256.png"
        />
        <PaymentMethodCard
          description="Bank slip"
          isClicked={bankSlipPressed}
          onPressHandler={onBankSlipSelect}
          imageUrl="https://thenounproject.com/api/private/icons/4684667/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
        />
      </View>
    </View>
  );
}
