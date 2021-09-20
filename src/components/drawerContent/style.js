import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
const styles = StyleSheet.create({
    headerDrawerContainer:{
        backgroundColor: colors.backgroundDrawerHeaderContainer,
        height:200, 
        top:-5
    },
    hr:{
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        width:"95%",
        alignSelf:'center'
      }
    ,
    headerTitle:{

    },
    drawerItem:{

    },
    drawerItemLabel:{
        fontSize:15
    }
})
export default styles