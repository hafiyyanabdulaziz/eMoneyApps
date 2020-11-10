import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import TopBar from '../components/molecules/TopBar'
import IconButton from '../components/atoms/IconButton'

const ScanQR = () => {
    return (
        <View >
            <TopBar title='QR Payment' />
            <View style={{ height: 85 }} />
            <View style={styles.qr} />
        </View>
    )
}

export default ScanQR

const styles = StyleSheet.create({
    qr: {
        backgroundColor: '#C4C4C4',
        height: 319,
        margin: 20,
    },
})
