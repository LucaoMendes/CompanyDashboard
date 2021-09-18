import React from 'react'
import { Text, View , TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'
import styles from '../../pages/Principal/style'
import { FontAwesome } from '@expo/vector-icons'
export default function listItem({ item , navigation , listType , categoria } ) {
    if(listType=="categorias"){
        const categoria = item.id
        return (
            <TouchableOpacity style={styles.categoriaItem} 
            onPress={()=> { navigation.navigate("Produtos",{categoria})
            }} 
                >
                <View style={styles.categoriaItemImage}>
                <FontAwesome name="sellsy"
                            size={50}
                            color={colors.iconColorItem}/>
                </View>
                <Text style={styles.categoriaItemTitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }else if(listType=="produtos"){
        return (
            <TouchableOpacity style={styles.categoriaItem} 
            onPress={()=> {  }} 
                >
                <View style={styles.categoriaItemImage}>
                <FontAwesome name="sellsy"
                            size={50}
                            color={colors.iconColorItem}/>
                </View>
                <Text style={styles.categoriaItemTitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    
}
