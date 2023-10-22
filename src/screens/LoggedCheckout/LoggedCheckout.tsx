import { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import { CartContext } from "../../contexts/cartContext";
import LoggedCheckoutHeader from "../../components/logged-checkout/LoggedCheckoutHeader/LoggedCheckoutHeader";
import ShipAddressBox from "../../components/logged-checkout/ShipAddressBox/ShipAddressBox";
import PaymentMethod from "../../components/logged-checkout/PaymentMethod/PaymentMethod";
import DeliveryMethod from "../../components/logged-checkout/DeliveryMethod/DeliveryMethod";
import { deliveryMethods } from "../../util/deliveryData";
import FooterSummary from "../../components/logged-checkout/FooterSummary/FooterSummary";

type LoggedCheckoutStackParamList = {
  LoggedCheckout: any;
  AddShippingAddress: any;
  SuccessContinue: any;
  SuccessEnd: any;
};

type LoggedCheckoutScreenNavigationProp =
  NativeStackScreenProps<LoggedCheckoutStackParamList>;

interface ReceivedAddressData {
  postalCode: string;
  address: string;
  city: string;
  state: string;
  fullName: string;
}

interface UsedAddressData extends ReceivedAddressData {
  country: string;
}

interface DeliveryMethodData {
  logoImage: string;
  deliveryPrice: number;
  deliveryTime: { minDays: number; maxDays: number };
}

enum typeofPayment {
  card,
  pix,
  bankslip,
}

export default function LoggedCheckout({
  navigation,
  route,
}: LoggedCheckoutScreenNavigationProp) {
  const [paymentMethod, setPaymentMethod] = useState<typeofPayment | undefined>(
    undefined
  );
  const [addressData, setAddressData] = useState<UsedAddressData | undefined>(
    undefined
  );
  const [deliveryData, setDeliveryData] = useState<
    DeliveryMethodData | undefined
  >(undefined);

  const cartContext = useContext(CartContext);

  const address = route.params as ReceivedAddressData;

  useEffect(() => {
    if (address) {
      setAddressData({ ...address, country: "Brazil" });
    } else {
      setAddressData(undefined);
    }
  }, [address]);

  function onBackPress() {
    navigation.goBack();
  }

  function addAddressHandler() {
    navigation.navigate("AddShippingAddress");
  }

  function setPaymentMethodHandler(paymentMethod: typeofPayment) {
    setPaymentMethod(paymentMethod);
  }

  function setDeliveryMethodHandler(deliveryMethod: DeliveryMethodData) {
    setDeliveryData(deliveryMethod);
  }

  function submitOrderHandler() {
    navigation.navigate("SuccessContinue", paymentMethod);
  }

  return (
    <View style={styles.container}>
      <LoggedCheckoutHeader onBackPress={onBackPress} />

      <ScrollView>
        <ShipAddressBox address={addressData} onPress={addAddressHandler} />

        <PaymentMethod
          outerContainerStyle={styles.cardsContainer}
          setPaymentMethodHandler={setPaymentMethodHandler}
        />

        <DeliveryMethod
          outerContainerStyle={styles.cardsContainer}
          deliveryMethods={deliveryMethods}
          retrieveDeliveryData={setDeliveryMethodHandler}
        />

      </ScrollView>

      <FooterSummary
        submitOrderHandler={submitOrderHandler}
        deliveryPrice={deliveryData ? deliveryData.deliveryPrice : 0}
        isSubmitOrderButtonDisabled={
          deliveryData && typeof paymentMethod !== "undefined" && addressData
            ? false
            : true
        }
        totalPrice={cartContext.getTotalPrice()}
      />
    </View>
  );
}
