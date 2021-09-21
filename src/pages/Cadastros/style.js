import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:"row",
    },
    btnOption:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.backgroundSecondary,
        margin:2,
        height:50,
        
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.5,
        shadowRadius: 3.84,
        elevation:3,
        borderRadius:5,
    
    },
    btnLabel:{
        color:colors.fontColorOptionBtn
    },
    columnBtn:{
        width:"50%",
    }

})

export default styles