import { useEffect, useState } from "react";
import { View, Pressable, Text, ViewStyle } from "react-native";

import { styles } from "./style";

interface ShipAddressBoxProps {
  outerContainerStyle?: ViewStyle;
  onPress: () => void;
  address?: AddressData;
}

interface AddressData {
  postalCode: string;
  address: string;
  city: string;
  state: string;
  fullName: string;
  country: string;
}

export default function ShipAddressBox({
  onPress,
  outerContainerStyle,
  address,
}: ShipAddressBoxProps) {
  const [hasAddressAdded, setHasAddressAdded] = useState(false);

  useEffect(() => {
    if (address) {
      setHasAddressAdded(true);
    } else {
      setHasAddressAdded(false);
    }
  }, [address]);

  return (
    <View style={outerContainerStyle}>
      <Text style={styles.title}>Shipping address</Text>
      <Pressable onPress={onPress} style={styles.box}>
        <View style={styles.middleTextContainer}>
          {hasAddressAdded ? (
            <>
              <Text style={styles.name}>
                {address ? address.fullName : null}
              </Text>
              <Text style={styles.street}>
                {address ? address.address : null}
              </Text>
              <Text style={styles.city}>
                {address
                  ? `${address.city}, ${address.state} ${address.postalCode}, ${address.country}`
                  : null}
              </Text>
            </>
          ) : (
            <Text style={styles.middleText}>Click to add an address</Text>
          )}
        </View>
        <View style={styles.changeButtonContainer}>
          <Text style={styles.changeButton}>Change</Text>
        </View>
      </Pressable>
    </View>
  );
}
