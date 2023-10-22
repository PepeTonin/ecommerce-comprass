import { Text, View } from "react-native";

import { styles } from "./style";
import BackButton from "../../shared/BackButton/BackButton";

interface ProductDetailsHeaderProps {
  onBackPress: () => void;
  containerStyle?: any;
}

export default function LoggedCheckoutHeader(props: ProductDetailsHeaderProps) {
  return (
    <View
      style={[
        styles.container,
        props.containerStyle ? props.containerStyle : null,
      ]}
    >
      <BackButton onPress={props.onBackPress} color="black" />
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.placeholderContainer}></View>
    </View>
  );
}
