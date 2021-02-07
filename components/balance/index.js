import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import styles from './styles'

const index = ({navigation}) => {
    return (
        <View style={styles.container}>
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
        </View>
    )
}

export default index

