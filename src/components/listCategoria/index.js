import React, { Component } from 'react'
import { 
    Text , 
    View , 
    TouchableOpacity ,
    FlatList, 
} from 'react-native'
import styles from '../../pages/Principal/style'
import { FontAwesome } from '@expo/vector-icons'
//Categoria Component + DAO
import categorias from "../../controller/categoriasDAO";
import CategoriaListItem from "../../components/categoriasListItem";


export default function ListCategoria({navigation}) {
    const renderItem = ({ item }) => {
        return (
            <CategoriaListItem item={item} navigation={navigation}/>
        );
      }
      return(
        <View style={styles.containerItemList}>
            <FlatList
            data={categorias}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3} />
        </View>
      )
}
