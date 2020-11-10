import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({ title }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container} >
                <Text style={styles.text} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4982C1',
        borderRadius: 4,
        //height: 48,
        paddingVertical: 14,
        marginLeft: 40,
        marginRight: 40,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFFFFF',
    }
})
