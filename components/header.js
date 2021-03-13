import { bold } from 'ansi-styles';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Your To~Do List</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        paddingTop: 20,
        backgroundColor: '#1e212d',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});