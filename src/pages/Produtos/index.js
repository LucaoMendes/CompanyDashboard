import React from "react";
import {
    View,
} from "react-native"

import navigationHeader from "../../components/navigationHeader";


export default function Produtos({navigation}){
    React.useLayoutEffect(()=>{
        navigationHeader({navigation})
    },[navigation])




    return(
        
        <View>
        </View>
        
    )
}