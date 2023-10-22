import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    height: 82,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 0.5,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginRight: 16,
  },
  image: {
    height: 50,
    width: 50,
  },
  description: {
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xs,
    color: colors.black,
  }
});
