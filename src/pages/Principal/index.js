import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native"



import ListForm from "../../components/listForm";
import colors from "../../styles/colors"

export default function Principal({route ,navigation}){
    const { categoria } = route.params ? route.params : "0";
    const listTypeInfo = route.params ? "produtos" : "categorias"   

    

    return(
    <View style={{height:'100%',backgroundColor:colors.background}}>
        <ListForm navigation={navigation} listType={listTypeInfo} categoria={ JSON.stringify(categoria)}/>
    </View>
        
        
    )
}

