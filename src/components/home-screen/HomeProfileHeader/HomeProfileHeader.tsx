import { Image, Text, View } from "react-native";

import { styles } from "./style";

interface HomeProfileHeaderProps {
  userImageUrl: string;
  userName: string;
}

export default function HomeProfileHeader(props: HomeProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            props.userImageUrl
              ? { uri: props.userImageUrl }
              : {
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
                }
          }
        />
      </View>
      <View>
        <Text style={styles.text}>Hello, {props.userName}</Text>
      </View>
    </View>
  );
}
