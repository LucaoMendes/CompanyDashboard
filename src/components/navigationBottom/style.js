import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
import metrics from "../../styles/metrics";
const styles = StyleSheet.create({
    cartBadge:{ 
        backgroundColor:colors.backgroundBadgeIcon,
        color:colors.colorBadgeIcon,
        position: 'absolute', 
        top: 5, 
        left: 5,
    },
    cartIcon:{
        position: 'absolute', 
        left: 5,
    },
    appBarContainer:{
        backgroundColor:colors.backgroundBottomBar,
        borderTopStartRadius: 15,
        borderTopEndRadius:15
    },
    totalTextContainer:{
        flex:1,
        flexDirection:"column",
        alignItems:'center'
    },
    totalText:{
        left:-50,
        fontSize: 18,
        color:colors.fontColorBottomBar,
        
    },
    cobrarIcon:{
        color:colors.colorCashIcon,
        fontSize: 23
    },
    fabPlusButton:{
        backgroundColor:colors.backgroundFabButton,
        height:52,
        width:52,
        borderRadius: 1000,
        justifyContent:'center',
        alignItems:'center',
        top:-25,
        right:-4,
        borderColor:colors.background,
        borderWidth:3,

    },
    fabPlusIcon:{
        color:colors.fontColorFabButton,
        fontSize:25,

    }
})

export default styles