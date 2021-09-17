import { FontAwesome5 , AntDesign } from '@expo/vector-icons'; 
import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Appbar, Badge } from 'react-native-paper'
import styles from './style'
export default function NavigationBottom(){
    
    return (
        <Appbar style={styles.appBarContainer}>
        <Badge
            visible={true}
            size={16}
            style={styles.cartBadge}>
                5
        </Badge>
        <Appbar.Action
            style={styles.cartIcon}
            icon="cart"
            onPress={() => console.log('Carrinho')}
            />
            <View style={styles.totalTextContainer}>
                <Text style={styles.totalText}>Total: R$ 40,00</Text>
            </View>
        <Appbar.Action
            icon={()=>(
                <FontAwesome5 name="cash-register" style={styles.cobrarIcon} />
            )} 
            onPress={() => console.log('Cobrar')}/>
            <TouchableWithoutFeedback style={styles.fabPlusButton}>
                <AntDesign name="plus" style={styles.fabPlusIcon} />
            </TouchableWithoutFeedback>
        </Appbar>

    );
}
