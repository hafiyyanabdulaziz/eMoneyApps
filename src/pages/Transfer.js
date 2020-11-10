import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import TopBar from '../components/molecules/TopBar'

const Transfer = () => {
    return (
        <View>
            <TopBar title='Transfer' />
            <View style={{ height: 214 }} />
            <Input placeholder='Nominal Transfer' />
            <View style={{ height: 17 }} />
            <Input placeholder='No Handphone Penerima' />
            <View style={{ height: 21 }} />
            <Text style={styles.text1}>Penerima:</Text>
            <View style={{ height: 21 }} />
            <Text style={styles.text2}>Dendy Aditya</Text>
            <View style={{ height: 21 }} />
            <Button title='TRANSFER' />
        </View>
    )
}

export default Transfer

const styles = StyleSheet.create({
    text1: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: '400',
    },
    text2: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: '300',
    }
})
