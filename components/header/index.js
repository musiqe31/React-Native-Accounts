import React, {useState, useEffect} from 'react'
import { Text, View}  from 'react-native'
import styles from './styles'

const index = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default index

