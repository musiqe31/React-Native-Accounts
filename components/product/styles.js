import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'lightgrey'  
    },
    header:{
        borderColor:'midnightblue',
        borderWidth:1,
        width:'90%',
        borderRadius:5,
        padding:15,
        backgroundColor:'white'
    },
    infoblock:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    names:{
        fontSize:18
    },
    prod:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        borderColor:'midnightblue',
        borderWidth:1,
        width:'90%',
        padding:15,
        borderRadius:5
    }
})

export default styles;