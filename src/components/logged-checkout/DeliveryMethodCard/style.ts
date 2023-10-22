import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginRight: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 50,
  },
  deliveryTimeText: {
    color: colors.gray_500,
    fontSize: fontSizes.xxs,
    fontFamily: fontFamilies.regularOpenSans,
    marginVertical: 4,
  },
  deliveryPriceText: {
    color: colors.black,
    fontSize: fontSizes.xs,
    fontFamily: fontFamilies.semiBoldOpenSans,
  },
});
