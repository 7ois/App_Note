import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "My List",
};

//---------- STYLES ----------
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#D88585",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Header;
