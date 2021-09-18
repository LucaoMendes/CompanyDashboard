import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native"



import ListForm from "../../components/listForm";
import NavigationBottom from "../../components/navigationBottom";
import navigationHeader from "../../components/navigationHeader";
import colors from "../../styles/colors"
import {FAB, Portal, Provider  } from 'react-native-paper'

export default function Principal({navigation}){
    React.useLayoutEffect(()=>{
      navigationHeader({navigation})
    },[navigation])

    

    return(
    <View style={{height:'100%',backgroundColor:colors.background}}>
        
        <ListForm navigation={navigation} listType={'categorias'}/>
       
        <NavigationBottom/>
        
    </View>
        
        
    )
}

