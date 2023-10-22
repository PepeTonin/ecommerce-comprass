import { useContext, useState } from "react";
import {
  Text,
  View,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./style";
import { AuthContext } from "../../contexts/authContext";
import Tittle from "../shared/Tittle/Tittle";
import { colors } from "../../styles/globalStyles";

export default function AuthProfile() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [button1Background, setButton1Background] = useState("red");
  const [button2Background, setButton2Background] = useState("white");
  const [color1TextButton, setColor1TextButton] = useState("white");
  const [color2TextButton, setColor2TextButton] = useState("black");

  const authContext = useContext(AuthContext);

  const handleButton1Press = () => {
    setButton1Background("red");
    setButton2Background("white");
    setColor1TextButton("white");
    setColor2TextButton("black");
  };

  const handleButton2Press = () => {
    setButton1Background("white");
    setButton2Background("red");
    setColor1TextButton("black");
    setColor2TextButton("white");
  };

  const logoutHandler = () => {
    authContext.logout();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Tittle style={styles.textTitle}>My profile</Tittle>

      <View style={styles.header}>
        <Image
          source={
            authContext.user.avatar
              ? { uri: authContext.user.avatar }
              : {
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
                }
          }
          style={styles.image}
        />
        <View style={styles.profileTexts}>
          <Text style={styles.name}>{authContext.user.name}</Text>
          <Text style={styles.email}>{authContext.user.email}</Text>
        </View>
      </View>

      <View style={styles.boxes}>
        <Pressable style={styles.box} onPress={toggleModal}>
          <Text style={styles.boxText}>Language</Text>
          <Ionicons name="chevron-up" size={25} color={colors.gray_200} />
        </Pressable>

        <Modal visible={isModalVisible} transparent>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.modalBackground}
          >
            <View style={styles.modalContent}>
              <Tittle children="Languages" style={styles.modalTitle} />
              <Pressable
                onPress={() => {
                  handleButton1Press();
                }}
                style={[
                  styles.buttonLanguage,
                  { backgroundColor: button1Background },
                ]}
              >
                <Text
                  style={[styles.modalLanguage, { color: color1TextButton }]}
                >
                  English
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  handleButton2Press();
                }}
                style={[
                  styles.buttonLanguage,
                  { backgroundColor: button2Background },
                ]}
              >
                <Text
                  style={[styles.modalLanguage, { color: color2TextButton }]}
                >
                  Portuguese - Brazil
                </Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>

        <Pressable style={styles.box} onPress={logoutHandler}>
          <Text style={styles.boxText}>Log out</Text>
          <Ionicons name="log-out-outline" size={25} color={colors.gray_200} />
        </Pressable>
      </View>
    </View>
  );
}
