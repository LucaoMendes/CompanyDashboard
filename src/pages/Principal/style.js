import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
import metrics from "../../styles/metrics";
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%'
    },


    menuIcon:{
        marginLeft:10,
        color:'white'
    },
    headerText:{
        
    },
    header:{
        backgroundColor: colors.backgroundPrimary
    },
    categoriaItem:{
        padding: 20,
        paddingVertical: 15,
        alignItems:'center',
        justifyContent:"center",
        paddingHorizontal:15,
        minHeight: metrics.screenHeight * 0.25,
        minWidth: metrics.screenWidth * 0.5,
    },
    categoriaItemTitle:{
        color:"#fff",
        fontSize: 32
    },
    categoriaItemImage:{
    },
    containerItemList:{
        backgroundColor: colors.backgroundSecondary
    },
    btnPrincipal:{
        
    }
})

export default styles