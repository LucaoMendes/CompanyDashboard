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
    cobrarContainer:{
        right:0,
    },  
    cobrarIcon:{
        color:colors.colorCashIcon,
        fontSize: 23
    },
    fabGroup:{
        right:0,
        bottom:20,

    },
    fabPlusButton:{
        backgroundColor:colors.backgroundFabButton,
        height:54,
        width:54,
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        borderColor:colors.background,
        borderWidth:3,

    },
    fabPlusIcon:{
        color:colors.fontColorFabButton,
        fontSize:25,

    }
})

export default styles