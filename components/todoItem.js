import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { CheckBox } from 'react-native-elements';
// import PressDone from './pressDone';
// import { helvetica } from 'expo-font';

export default function TodoITem({ item, pressHandler }) {
    const [isSelected, setSelection] = useState(false);
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <TextInput onPress={() => pressHandler()} style={styles.itemText}>{item.text}</TextInput>
                <View style={styles.itemIcon}>
                    <MaterialIcons name="delete" size={22} color="#db5148" onPress={() => pressHandler(item.key)} />
                </View>
            </View>
            <View style={{
                borderBottomColor: '#f2edd7',
                borderBottomWidth: .2,
            }}>
                <Text style={styles.itemDone}>{isSelected ? "✔️ Done" : ""}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 10,
        flexDirection: 'row',

    },
    itemText: {
        marginLeft: 2,
        fontSize: 14,
        color: '#3a6351',
        // fontFamily: 'helvetica',
    },
    itemIcon: {
        position: 'absolute',
        right: 5,
        padding: 15,

    },
    itemDone: {
        paddingLeft: 20,
        color: 'green',

    }
})