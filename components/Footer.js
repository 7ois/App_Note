import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import PriceContext from "../hook/Price";

const Footer = (props) => {
  const { totalPrice } = useContext(PriceContext);
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Total items : {props.title}</Text>
      <Text style={styles.text}>Total Price : {totalPrice}</Text>
    </View>
  );
};

//---------- STYLES ----------
const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#D88585",
    color: "#fff",
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    color: "#fff",
  },
});

export default Footer;
