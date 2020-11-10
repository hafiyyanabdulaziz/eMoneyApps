import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import TopBar from '../components/molecules/TopBar'

const Registrasi = () => {
    return (
        <View >
            <TopBar title='Registrasi Akun' />
            <ScrollView  >
                <View style={{ height: 95 }} />
                <Input placeholder='Email' />
                <View style={{ height: 31 }} />
                <Input placeholder='Password' />
                <View style={{ height: 31 }} />
                <Input placeholder='Nama' />
                <View style={{ height: 31 }} />
                <Input placeholder='No Handphone' />
                <View style={{ height: 31 }} />
                <Button title='SUBMIT' />
                <View style={{ height: 95 }} />
            </ScrollView>
        </View>
    )
}

export default Registrasi

const styles = StyleSheet.create({})
