import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    }, inputs:{
        borderColor:"black",
        borderWidth:1,
        height:40,
        width:'80%',
        margin:10,
        borderRadius:5,
        padding:5,
        textAlign:'center',
        backgroundColor:'white'
    },
    btn:{
        backgroundColor:"midnightblue",
        width:'80%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    color:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    }, 
    logo:{
        height:100,
        width:280,
        resizeMode:'contain'
    },
    regcontainer:{
        margin:15,
        display:'flex',
        flexDirection:'row',
    },
    register:{
        color:'midnightblue',
        fontSize:17,
        borderBottomColor:'midnightblue',
        borderBottomWidth:1
    },
    New:{
        fontSize:17
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
})

export default styles;