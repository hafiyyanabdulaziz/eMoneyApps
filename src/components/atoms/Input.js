import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({ placeholder }) => {
    return (
        <View>
            <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 4,
        borderColor: '#C3C3C3',
        height: 48,
    }
})
