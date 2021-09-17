import React, { Component } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'
import styles from '../../pages/Principal/style'
import { FontAwesome } from '@expo/vector-icons'
export default function CategoriaListItem({ item , navigation}) {
    return (
            <TouchableOpacity style={styles.categoriaItem} 
            onPress={()=> { navigation.navigate("Produtos") }} 
                >
                <View style={styles.categoriaItemImage}>
                <FontAwesome name="cogs"
                            size={50}
                            color={colors.iconColorItem}/>
                </View>
                <Text style={styles.categoriaItemTitle}>{item.title}</Text>
            </TouchableOpacity>
    )
}
