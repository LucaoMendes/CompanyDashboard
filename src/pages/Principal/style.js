import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
import metrics from "../../styles/metrics";
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%'
    },
//MOVER PARA GENERAL
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


    /* Categoria Item List */
    categoriaItem:{
        padding: 20,
        paddingVertical: 15,
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:"center",
        
        backgroundColor: colors.backgroundItem,
        //width:123.33,
        height:100,
        margin: 2.5,
        borderRadius:10,

        flexGrow:1,
        flexBasis:0,
        shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:2,
            },
            shadowOpacity:0.25,
            shadowRadius: 3.84,
            elevation:3,
        
    },
    categoriaItemTitle:{
        color: colors.fontColorItem,
        fontSize: 15
    },
    categoriaItemImage:{
        color: colors.iconColorItem,
    },
    containerItemList:{
        flex:1,
        flexDirection:'column',
        
    },
    btnPrincipal:{
        
    }
})

export default styles