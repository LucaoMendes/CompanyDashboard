import React from 'react'
import { 
    Text , 
    View , 
    TouchableOpacity ,
    FlatList, 
} from 'react-native'
import styles from '../../pages/Principal/style'
import { FontAwesome } from '@expo/vector-icons'
//Categoria Component + DAO
import Categorias from "../../controller/categoriasDAO";
import CategoriaListItem from "../../components/categoriasListItem";


export default function ListCategoria({navigation}) {
    var categoItems = Categorias()
    console.log('DATA INFO',categoItems)
    const renderItem = ({ item }) => {
        return (
            <CategoriaListItem item={item} navigation={navigation}/>
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
}
