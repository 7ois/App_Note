import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const ListItem = ({ item, deleteItem }) => {

  const [number, setnumber] = useState();
  const onChange = priceValue => setnumber(parseInt(priceValue));

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <TextInput style={styles.listItemPrice} placeholder='- Add Price -' onChangeText={onChange}/>
        <Ionicons style={styles.icons} name='close' size={20} color='firebrick' onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  )
}

//---------- STYLES ----------
const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  icons: {
    marginLeft: 10
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 16,
    flex: 1
  },
  listItemPrice: {
    fontSize: 14,
    textAlign: 'center',
    // backgroundColor: 'lightgray',
    padding: 5,
    margin: 5,
  }
})

export default ListItem;