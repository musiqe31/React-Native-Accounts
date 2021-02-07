import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const index = ({navigation}) => {
    return (
        <View style={styles.container}>

<View style={[styles.prod, {marginTop:40}]}>
        <View style={{width:'75%'}}>
            <Text>Be Sure To Search Our Products To Better Serve You</Text>
        </View>
        <View>
        <Icon name="book" color="midnightblue" size={30} onPress={()=>navigation.navigate("Products")} />
        </View>
        </View>


            <View style={[styles.header,{margin:5}]}>
                <View>
                <Text style={{fontWeight:'bold', fontSize:20, color:'midnightblue'}}>ACCOUNTS</Text>
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
                    <Text style={{color:'midnightblue',fontSize:16, fontWeight:'bold'}}>VIEW ALL ACCOUNTS</Text>
                </View>
            </View>

            </View>


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

