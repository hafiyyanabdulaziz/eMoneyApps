import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Logo from '../assets/Logo'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import Link from '../components/atoms/Link'

const Login = () => {
    return (
        <View style={styles.page} >
            <Logo />
            <View style={{ height: 19 }} />
            <Input placeholder='Email' />
            <View style={{ height: 25 }} />
            <Input placeholder='Password' />
            <View style={{ height: 25 }} />
            <Button title='LOGIN' />
            <View style={{ height: 27 }} />
            <Link title='Registrasi' />
        </View >
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        //alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})
