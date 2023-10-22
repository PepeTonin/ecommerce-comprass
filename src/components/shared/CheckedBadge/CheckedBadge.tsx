import { Text, View, ViewStyle } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";

interface CheckedBadgeProps {
  style?: ViewStyle;
}

export default function CheckedBadge({ style }: CheckedBadgeProps) {
  return (
    <View style={[styles.container, style]}>
      <AntDesign name="check" size={14} color={colors.white} />
    </View>
  );
}
