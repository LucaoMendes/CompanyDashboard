import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
import metrics from "../../styles/metrics";
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%'
    },


    

    /* Header */
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
        color:'white'
    },
    headerLogoutIcon:{
        fontSize:10,
        color:'white',
        backgroundColor:colors.backgroundSecondary,
        borderRadius:1000,
        padding:3
    },
    headerRightText:{
        marginRight:2,
        color:'white',

    },
    header:{
        backgroundColor: colors.backgroundPrimary,
        height:100
    },
    avatar:{
        backgroundColor:'white',
    }, 
    containerLogout:{
        flexDirection:'row',
        alignItems:'center'
    } ,


    /* Categoria Item List */
    categoriaItem:{
        padding: 20,
        paddingVertical: 15,
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:"center",
        
        backgroundColor: colors.backgroundSecondary,
        //width:123.33,
        height:100,
        margin: 2.5,
        borderRadius:10,

        flexGrow:1,
        flexBasis:0,
        
    },
    categoriaItemTitle:{
        color:"#fff",
        fontSize: 15
    },
    categoriaItemImage:{
    },
    containerItemList:{
        flex:1,
        flexDirection:'column',
        
    },
    btnPrincipal:{
        
    }
})

export default styles