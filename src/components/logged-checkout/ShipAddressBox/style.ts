import { StyleSheet } from "react-native";
import { fontFamilies, fontSizes, colors } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    fontFamily: fontFamilies.extraBoldOpenSans,
    fontSize: fontSizes.m,
  },
  box: {
    marginTop: 16,
    width: "100%",
    height: 108,
    borderRadius: 8,
    backgroundColor: colors.white,
    elevation: 0.5,
    flexDirection: "row",
  },
  middleTextContainer: {
    flex: 1,
    paddingLeft: 24,
    justifyContent: "center",
  },
  middleText: {
    color: colors.gray_500,
    fontFamily: fontFamilies.semiBoldOpenSans,
    fontSize: fontSizes.xs,
  },
  changeButtonContainer: {
    paddingTop: 18,
    paddingRight: 24,
  },
  changeButton: {
    color: colors.red_500,
    fontFamily: fontFamilies.semiBoldOpenSans,
    fontSize: fontSizes.xs,
  },
  name: {
    textTransform: "capitalize",
    color: colors.black,
    fontFamily: fontFamilies.semiBoldOpenSans,
    fontSize: fontSizes.xs,
    marginBottom: 7,
  },
  street: {
    textTransform: "capitalize",
    color: colors.black,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xs,
  },
  city: {
    textTransform: "capitalize",
    color: colors.black,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xs,
  },
});
