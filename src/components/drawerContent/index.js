import React, { Component } from "react";
import { View } from "react-native";

import styles from './style'
import { AntDesign } from '@expo/vector-icons'; 
import { DrawerContentScrollView , DrawerItem } from '@react-navigation/drawer'

export default function DrawerContent(props){
        return(
            <DrawerContentScrollView {...props}>
                <View style={styles.headerDrawerContainer}>
                </View>
                <DrawerItem 
                label="TESTE" 
                icon={()=> <AntDesign name="home" size={24} color="black" />}
                    />
            </DrawerContentScrollView>
        )
    
} 