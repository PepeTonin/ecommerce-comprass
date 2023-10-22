import { StyleSheet } from "react-native";

import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
    paddingTop: 16,
  },
  footerTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  text1: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.gray_500,
    fontSize: fontSizes.xs,
  },
  text2: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.black,
    fontSize: fontSizes.s,
  },
  text3: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    color: colors.gray_500,
    fontSize: fontSizes.s,
  },
  text4: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    color: colors.black,
    fontSize: fontSizes.l,
  },
  button: {
    width: "100%",
  },
});
