import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native"




//BtnPrincipal
import { btnPrincipal } from "../../components/btnPrincipal";
import ListCategoria from "../../components/listCategoria";
import navigationHeader from "../../components/navigationHeader";



export default function Principal({navigation}){
    React.useLayoutEffect(()=>{
      navigationHeader({navigation})
    },[navigation])


    

    return(
        
        <ListCategoria navigation={navigation}/>
        
    )
}