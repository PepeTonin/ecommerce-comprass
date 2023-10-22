import { StyleSheet } from "react-native";
import { fontFamilies, fontSizes, colors } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamilies.extraBoldOpenSans,
    color: colors.black,
    fontSize: fontSizes.m,
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
