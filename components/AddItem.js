import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const AddItem = ({ addItem }) => {

    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput placeholder='- Add Menu -' style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}>
                    {/* <Ionicons name='add' style={{ color: "#ffffff"}} size={20} /> */}
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    )
}

//---------- STYLES ----------
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        flex: 1
    },
    btn: {
        backgroundColor: '#D88585',
        padding: 9,
        margin: 5,
        borderRadius: 15
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        width: 80
    }
})

export default AddItem