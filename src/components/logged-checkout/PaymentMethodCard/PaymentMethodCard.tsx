import { Text, View, Image, Pressable } from "react-native";

import { styles } from "./style";
import CheckedBadge from "../../shared/CheckedBadge/CheckedBadge";

interface PaymentMethodCardProps {
  isClicked: boolean;
  imageUrl: string;
  description: string;
  onPressHandler: () => void;
}

export default function PaymentMethodCard({
  isClicked,
  imageUrl,
  description,
  onPressHandler,
}: PaymentMethodCardProps) {
  return (
    <Pressable style={styles.container} onPress={onPressHandler}>
      {isClicked && (
        <CheckedBadge style={{ position: "absolute", top: -5, right: -5, zIndex: 0 }} />
      )}
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
}
