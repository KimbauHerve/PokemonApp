import React, { Component } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Head = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#61dafb" />
            <Text style={styles.tstyle}> Hervé Kimbau </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: "#61dafb",

        borderBottomLeftRadius: 30,
        borderBottomEndRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    tstyle: {
        color: '#fff',
        fontSize: 30,
    }
});

export default Head;