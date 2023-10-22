import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontFamily: fontFamilies.boldOpenSans,
    fontSize: fontSizes.m,
    color: colors.black,
  },
  placeholderContainer: {
    width: 32,
  },
});