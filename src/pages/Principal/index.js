import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native"




//BtnPrincipal
import { btnPrincipal } from "../../components/btnPrincipal";
import ListCategoria from "../../components/listCategoria";
import navigationConfigPrincipal from "../../components/navigationHeader";



export default function Principal({navigation}){
    React.useLayoutEffect(()=>{
        navigationConfigPrincipal({navigation})
    },[navigation])


    

    return(
        
        <ListCategoria/>
        
    )
}