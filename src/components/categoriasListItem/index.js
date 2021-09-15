import React, { Component } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'
import styles from '../../pages/Principal/style'
import { FontAwesome } from '@expo/vector-icons'
export default function categoriaListItem({ item }) {
    return (
        <View style={styles.containerItem}>
            <TouchableOpacity style={styles.categoriaItem} 
                >
                <View style={styles.categoriaItemImage}>
                <FontAwesome name="cogs"
                            size={50}
                            color="#fff"/>
                </View>
                <Text style={styles.categoriaItemTitle}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
