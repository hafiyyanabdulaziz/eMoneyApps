import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    return (
        <View>
            <Text style={styles.logo} >e-money</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        textAlign: 'center',
        fontSize: 24,
        color: '#4982C1',
        fontWeight: '500'
    }
})
