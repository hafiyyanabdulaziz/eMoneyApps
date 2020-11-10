import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../atoms/IconButton'

const TopBar = () => {
    return (
        <View style={styles.topbar} >
            <View style={{ width: 17 }} />
            <IconButton />
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    topbar: {
        backgroundColor: '#005690',
        paddingVertical: 20,
        flexDirection: 'row',
    }
})
