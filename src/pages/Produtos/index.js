import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native"

import { AntDesign } from '@expo/vector-icons'; 
import styles from "./style";
import colors from "../../styles/colors"

//Produtos Component + DAO
import produtosListItem from "../../components/produtosListItem";
import produtos from "../../controller/produtosDAO";
//BtnPrincipal
import { btnPrincipal } from "../../components/btnPrincipal";

export default function Produtos({navigation}){
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=>{
                return(
                  
                  <TouchableOpacity onPress={()=> { navigation.navigate("Principal") }}>
                    <AntDesign style={styles.menuIcon} name="menuunfold" size={24} color="black" />
                  </TouchableOpacity>
                )
              },
              headerTintColor:colors.fontColorPrimary,
              headerStyle: styles.header,
              title:'Categoria Tal',
            
        })
    },[navigation])




    return(
        
        <View>
            <View style={styles.containerItemList}>
                <FlatList
                data={produtos}
                renderItem={produtosListItem}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2} />
            </View>
        </View>
        
    )
}