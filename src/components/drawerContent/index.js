import React, { Component } from "react";
import { View } from "react-native";

import styles from './style'
import { AntDesign } from '@expo/vector-icons'; 
import { DrawerContentScrollView , DrawerItem } from '@react-navigation/drawer'

export default function DrawerContent({navigation}){
        return(
            <DrawerContentScrollView >
                <View style={styles.headerDrawerContainer}>
                </View>
                <DrawerItem 
                label="OK" 
                icon={()=> <AntDesign name="home" size={24} color="black" />}
                onPress={()=>{navigation.navigate("Principal") }}
                    />
            </DrawerContentScrollView>
        )
    
} 