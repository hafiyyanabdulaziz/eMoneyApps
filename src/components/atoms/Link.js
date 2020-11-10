import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Link = ({ title }) => {
    return (
        <TouchableOpacity>
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: '#4E4E4E',
    }
})
