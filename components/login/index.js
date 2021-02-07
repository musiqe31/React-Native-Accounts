import React, {useState, useEffect} from 'react'
import { Image, Text, View, Pressable, TextInput, Alert, ToastAndroid, ImageBackground} from 'react-native'
import styles from './styles'
import axios from 'axios'

const index = ({navigation}) => {

const [username, setusername] = useState("")
const [password, setpassword] = useState("")

useEffect(() => {
    console.log("Login")
    axios.get('http://localhost:3000/users')
    .then(response => console.log(response.data))

},[])

const signin = () =>{
    if(username.length != 0 || password.length != 0){
        ToastAndroid.show("Welcome "+username+"!", ToastAndroid.LONG);
        navigation.navigate('Home')
        setusername("")
        setpassword("")
    }else{
        ToastAndroid.show("Invalid Credentials", ToastAndroid.LONG);
}
}

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/home.jpg')} style={styles.image}/>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <TextInput style={styles.inputs} value={username} onChangeText={(e)=> setusername(e)} placeholder="Username"/>
            <TextInput secureTextEntry={true} value={password} style={styles.inputs} onChangeText={(e)=> setpassword(e)} placeholder="Password"/>

            <Pressable style={styles.btn} onPress={signin}>
                <Text style={styles.color}>Sign In</Text>
            </Pressable>

            <View style={styles.regcontainer}>
            <Text style={styles.New}>New User? </Text>
            <Pressable onPress={()=> navigation.navigate("Register")}>
                <Text style={styles.register}>Register</Text>
            </Pressable>
            </View>
        </View>
    )
}

export default index

