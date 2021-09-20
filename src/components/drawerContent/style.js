import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
const styles = StyleSheet.create({
    headerDrawerContainer:{
        flex:1,
        flexDirection:"column",
        backgroundColor: colors.backgroundDrawerHeaderContainer,
        height:220, 
        top:-5,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    hr:{
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        width:"95%",
        alignSelf:'center'
    },
    headerTitle:{

    },
    drawerItem:{

    },
    drawerItemLabel:{
        fontSize:15
    },
    avatarLoja:{
        marginBottom:5
    },
    drawerConfigPerfil:{
        left:20,
        minWidth:'100%',
        bottom:-15,
    },
    drawerConfigPerfilLabel:{
        
        color:colors.fontColorPrimaryHeaderContainer
    },
    drawerAuthenticationLevel:{
        width:'100%',
        left:20,
        color:colors.fontColorPrimaryHeaderContainer
    },
    drawerCompanyName:{
        width:'100%',
        textAlign:'center',
        color:colors.fontColorPrimaryHeaderContainer
    }
})
export default styles