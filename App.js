import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import uuid from "uuid-random";
import { PriceProvider } from "./hook/Price";
import Footer from "./components/Footer";

const App = () => {
  //1 ตัวแปร, 2 fuction
  const [items, setItems] = useState([]);
  const menu = items.length;

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "กรุณาใส่ข้อมูล");
    } else {
      setItems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <PriceProvider>
      <View style={styles.container}>
        <Header title="List" />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
        <View style={styles.footer}>
          <Footer title={menu} />
        </View>
      </View>
    </PriceProvider>
  );
};

//---------- STYLES ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
