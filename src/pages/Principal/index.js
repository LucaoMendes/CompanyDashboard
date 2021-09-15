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

//Categoria Component + DAO
import categorias from "../../controller/categoriasDAO";
import categoriaListItem from "../../components/categoriasListItem";
import { FontAwesome } from '@expo/vector-icons'
//BtnPrincipal
import { btnPrincipal } from "../../components/btnPrincipal";

export default function Principal({navigation}){
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=>{
                return(
                  
                  <TouchableOpacity onPress={()=> { navigation.navigate("Inicial") }}>
                    <AntDesign style={styles.menuIcon} name="menuunfold" size={24} color="black" />
                  </TouchableOpacity>
                )
              },
              headerTintColor:colors.fontColorPrimary,
              headerStyle: styles.header,
              title:'Nogueira Rações',
            
        })
    },[navigation])


    const renderItem = ({ item }) => {
        return (<View style={styles.containerItem}>
            <TouchableOpacity style={styles.categoriaItem} 
                >
                <View style={styles.categoriaItemImage}>
                <FontAwesome name="cogs"
                            size={50}
                            color="#fff"/>
                </View>
                <Text style={styles.categoriaItemTitle}>{item.title}</Text>
            </TouchableOpacity>
        </View>);
      }

    return(
        
        <View>
            <View style={styles.containerItemList}>
                <FlatList
                data={categorias}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2} />
            </View>
        </View>
        
    )
}