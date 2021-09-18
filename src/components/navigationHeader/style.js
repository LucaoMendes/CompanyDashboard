import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
const styles = StyleSheet.create({
    /* Header */
    headerContainer:{
        position:'absolute',
        left:0,
        right:0,
        backgroundColor:'grey',
        minHeight:100,
        justifyContent:'flex-end',
        alignItems:'center',
    },  
    headerLeft:{
        marginLeft:10,
    },
    headerRight:{
        alignItems:'center',
        flexDirection:'column',
        paddingRight:10,
    },
    menuIcon:{
        fontSize:24,
        color:colors.colorMenuIcon,
    },
    headerLogoutIcon:{
        fontSize:10,
        color:colors.colorLogoutIcon,
        backgroundColor:colors.backgroundLogoutIcon,
        borderRadius:1000,
        padding:3
    },
    headerRightText:{
        marginRight:2,
        color:colors.fontColorTopBar,

    },
    header:{
        backgroundColor: colors.backgroundTopBar,
        height:100
    },
    avatar:{
        backgroundColor:colors.fontColorTopBar,
        shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:2,
            },
            shadowOpacity:0.25,
            shadowRadius: 3.84,
            elevation:3,
    }, 
    containerLogout:{
        flexDirection:'row',
        alignItems:'center',
        
        
    } ,

})

export default styles