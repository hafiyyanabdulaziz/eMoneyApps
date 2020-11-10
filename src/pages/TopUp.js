import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import TopBar from '../components/molecules/TopBar'

const TopUp = () => {
    return (
        <View style={styles.page}>
            <TopBar title='Top Up' />
            <View style={{ height: 264 }} />
            <Input placeholder='Nominal Top Up' />
            <View style={{ height: 20 }} />
            <Button title='SUBMIT' />
        </View>
    )
}

export default TopUp

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E5E5E5',
        flex: 1,
    }
})
