import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native"



import ListForm from "../../components/listForm";
import colors from "../../styles/colors"

export default function Principal({navigation}){
    

    

    return(
    <View style={{height:'100%',backgroundColor:colors.background}}>
        
        <ListForm navigation={navigation} listType={'categorias'}/>
    </View>
        
        
    )
}

