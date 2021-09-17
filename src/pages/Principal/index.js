import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native"



import ListCategoria from "../../components/listCategoria";
import NavigationBottom from "../../components/navigationBottom";
import navigationHeader from "../../components/navigationHeader";
import colors from "../../styles/colors"


export default function Principal({navigation}){
    React.useLayoutEffect(()=>{
      navigationHeader({navigation})
    },[navigation])


    

    return(
    <View style={{height:'100%',backgroundColor:colors.background}}>
        <ListCategoria navigation={navigation}/>
        <NavigationBottom/>
    </View>
        
        
    )
}