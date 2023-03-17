import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/Title.style";

function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>BEHEALTH!</Text>
    </View>
  )
}

export default Title