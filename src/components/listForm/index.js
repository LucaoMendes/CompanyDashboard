import React from 'react'
import { 
    Text , 
    View , 
    TouchableOpacity ,
    FlatList, 
} from 'react-native'
import styles from '../../pages/Categorias/style'
import { FontAwesome } from '@expo/vector-icons'
//Categoria Component + DAO
import Categorias, { getNextId } from "../../controller/categoriasDAO";
import ListItem from "../listItem";
import Produtos  from '../../controller/produtosDAO';


export default function ListForm({ navigation , listType , categoria}) {
    
    if(listType == 'categorias'){
        var categoItems = Categorias()
        console.log('DATA INFO',categoItems)
        var renderItem = ({ item }) => {
            return (
                <ListItem item={item} navigation={navigation} listType={listType}/>
            );
          }
    return(
        <View style={styles.containerItemList}>
            <FlatList
            data={categoItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3} />
        </View>
        )
    }else if(listType == 'produtos'){
        var produtosItems = Produtos(categoria)
        console.log('DATA INFO',produtosItems)
        var renderItem = ({ item }) => {
            return (
                <ListItem item={item} navigation={navigation} listType={listType} categoria={categoria}/>
            );
          }
        return(
            <View style={styles.containerItemList}>
                <FlatList
                data={produtosItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3} />
            </View>
        )
    }
     
}
