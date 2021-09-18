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


export default function Produtos({route ,navigation}){
    const { categoria } = route.params;
    React.useLayoutEffect(()=>{
        navigationHeader({navigation})
      },[navigation])
    return(
        <View style={{height:'100%',backgroundColor:colors.background}}>
            <ListForm navigation={navigation} listType={'produtos'} categoria={ JSON.stringify(categoria)}/>
            <NavigationBottom/>
        </View>
        )
}