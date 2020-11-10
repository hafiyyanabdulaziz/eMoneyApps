import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../atoms/IconButton'

const TopBar = ({ title }) => {
    return (
        <View style={styles.topbar} >
            <View style={{ width: 17 }} />
            <IconButton />
            <View style={{ width: 10 }} />
            <Text style={styles.text} >{title}</Text>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    topbar: {
        backgroundColor: '#005690',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
    }
})
