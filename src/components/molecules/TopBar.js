import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../atoms/IconButton'

const TopBar = () => {
    return (
        <View style={styles.topbar} >
            <Text>Halo</Text>
            <IconButton />
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    topbar: {
        backgroundColor: '#005690',
        height: 56,
    }
})
