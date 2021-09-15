import React, { Component } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'
import styles from '../../pages/Principal/style'
import { FontAwesome } from '@expo/vector-icons'

export default function btnPrincipal() {
    return (
        <View style={styles.containerbtnPrincipal}>
            <TouchableOpacity style={styles.btnPrincipal}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}