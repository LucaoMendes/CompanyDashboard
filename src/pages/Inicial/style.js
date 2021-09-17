import { Dimensions, StyleSheet } from "react-native"
import general from "../../styles/general"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
    ...general,
        bigCircle:{
            width: Dimensions.get('window').height * 0.7,
            height: Dimensions.get('window').height * 0.7, 
            backgroundColor:colors.backgroundSecondary,
            borderRadius:1000,
            position: 'absolute',
            right: Dimensions.get('window').width * 0.25,
            top: -50,

        },
        smallCircle:{
            width: Dimensions.get('window').height * 0.4,
            height: Dimensions.get('window').height * 0.4,
            backgroundColor: colors.backgroundSecondary,
            borderRadius: 1000,
            position: "absolute",
            bottom: Dimensions.get('window').width * -0.2,
            right: Dimensions.get('window').width * -0.3,

        },
        authBox:{
            width: '80%',
            backgroundColor:colors.backgroundAuthBox,
            borderRadius:20,
            alignSelf: "center",
            paddingHorizontal:14,
            paddingBottom:30,
            shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:2,
            },
            shadowOpacity:0.25,
            shadowRadius: 3.84,
            elevation:5,
        },
        logoBox:{
            width:100,
            height:100,
            backgroundColor: colors.backgroundLogoBox ,
            borderRadius:100,
            alignSelf:'center',
            display:"flex",
            alignItems:"center",
            justifyContent:'center',
            top:-50,
            marginBottom:-50,
            shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:1,
            },
            shadowOpacity:0.2,
            shadowRadius:1.41,
            elevation:2,
        },
        logoIcon:{
            shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:1,
            },
            shadowOpacity:0.2,
            shadowRadius:1.41,
            elevation:1,
        }
        ,
        logoLabel:{
            fontSize: 13,
            color:colors.fontColorLogoBox,
            fontWeight:"bold",
            textAlign:'center',
        },
        loginTitleText:{
            fontSize:26,
            fontWeight:'bold',
            marginTop:20,
            color:colors.fontColorAuthTitle,
        },
        
        loginButton:{
            backgroundColor:colors.backgroundButton,
            marginTop:30,
            paddingVertical:15,
            borderRadius:100,
            shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:1,
            },
            shadowOpacity:0.2,
            shadowRadius:1.41,
            elevation:1,

        },
        loginButtonText:{
            color:colors.fontColorPrimary,
            textAlign:"center",
            fontSize:20,
            fontWeight:'bold'
        }

        
})
export default styles