import React from "react";
import {
    View,
} from "react-native"



import ListForm from "../../components/listForm";
import colors from "../../styles/colors"


export default function Produtos({route ,navigation}){
    const { categoria } = route.params;
    return(
        <View style={{height:'100%',backgroundColor:colors.background}}>
            <ListForm navigation={navigation} listType={'produtos'} categoria={ JSON.stringify(categoria)}/>
          
        </View>
        )
}