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
            <View style={[styles.header,{margin:10}]}>
                <View>
                <Text style={{fontWeight:'bold', fontSize:20, color:'midnightblue'}}>INSURANCE</Text>
                </View>

            <View style={styles.infoblock}>
                <View>
                    <Text style={styles.names}>RENTERS INSURANCE</Text>
                    <Text>Account# 1234</Text>
                </View>
                <View>
                    <Text>04/22/20 - 01/12/22</Text>
                </View>
            </View>

            <View style={[styles.infoblock, {marginTop:10}]}>
                <View>
                    <Text style={{color:'midnightblue',fontSize:16, fontWeight:'bold'}}>VIEW ALL POLICIES</Text>
                </View>
            </View>

            </View>


                        <View style={[styles.header,{margin:10}]}>
                <View>
                <Text style={{fontWeight:'bold', fontSize:20, color:'midnightblue'}}>CLAIMS CENTER</Text>
                </View>

            <View style={styles.infoblock}>
                <View>
                    <Text style={styles.names}>SAVINGS</Text>
                    <Text>Account# 1234</Text>
                </View>
                <View>
                    <Text>$3,232.34</Text>
                    <Text>Routing# 45678</Text>
                </View>
            </View>

            <View style={[styles.infoblock, {marginTop:10}]}>
                <View>
                    <Text style={styles.names}>CHECKINGS</Text>
                    <Text>Account# 1234</Text>
                </View>
                <View>
                    <Text>$3,232.34</Text>
                    <Text>Routing# 45678</Text>
                </View>
            </View>

            <View style={[styles.infoblock, {marginTop:10}]}>
                <View>
                    <Text style={{color:'midnightblue',fontSize:16, fontWeight:'bold'}}>VIEW ALL CLAIMS</Text>
                </View>
            </View>

            </View>
        </View>
    )
}

export default index

