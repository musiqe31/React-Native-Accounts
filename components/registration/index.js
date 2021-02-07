import React, { useState } from 'react'
import { Image, TextInput, Text, View,Pressable, ToastAndroid, Alert, ImageBackground } from 'react-native'
import styles from './styles'

const index = ({navigation}) => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [retypepassword, setretypepassword] = useState("")

    const check = (e) =>{
        if(username.length != 0 || password.length != 0 || retypepassword.length != 0){
            ToastAndroid.show("Registration Successful!", ToastAndroid.LONG);
            navigation.navigate('Login')
        }else{
            Alert.alert(
                "Error",
                "Please Correct Fields",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
    }
}

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/home.jpg')} style={styles.image}/>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <TextInput style={styles.inputs} onChangeText={(e)=> setusername(e)} placeholder="Username"/>
            <TextInput secureTextEntry={true} style={styles.inputs} onChangeText={(e)=> setpassword(e)} placeholder="Password"/>
            <TextInput secureTextEntry={true} style={styles.inputs} onChangeText={(e)=> setretypepassword(e)} placeholder="Retype Password"/>

            <Pressable style={styles.btn} onPress={check}>
                <Text style={styles.color}>Register</Text>
            </Pressable>
            <Pressable style={styles.cancel} onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.blue}>Cancel</Text>
            </Pressable>
        </View>
    )
}

export default index

