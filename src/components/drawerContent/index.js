import React, { Component } from "react";
import { View } from "react-native";

import styles from './style'
import { AntDesign , Octicons , MaterialIcons , FontAwesome5 ,Entypo } from '@expo/vector-icons'; 
import { DrawerContentScrollView , DrawerItem, DrawerItemList } from '@react-navigation/drawer'

function Hr(){
    return(<View
        style={styles.hr}
      />)
}
export default function DrawerContent({navigation}){
        return(
            <DrawerContentScrollView >
                <View style={styles.headerDrawerContainer}>

                </View>
                <DrawerItem 
                style={styles.drawerItem}
                labelStyle={styles.drawerItemLabel}
                label="Inicio" 
                icon={()=> <AntDesign name="home" size={24} color="black" />}
                onPress={()=>{navigation.navigate("Principal") }}
                    />
                    <Hr/>
                    <DrawerItem 
                style={styles.drawerItem}
                labelStyle={styles.drawerItemLabel}
                label="Controle de Caixa" 
                icon={()=> <FontAwesome5 name="cash-register" size={24} color="black" />}
                onPress={()=>{ }}
                    />
                    <DrawerItem 
                style={styles.drawerItem}
                labelStyle={styles.drawerItemLabel}
                label="Vendas" 
                icon={()=> <Entypo name="price-tag" size={24} color="black" />}
                onPress={()=>{ }}
                    />
                <DrawerItem 
                style={styles.drawerItem}
                labelStyle={styles.drawerItemLabel}
                label="Cadastros" 
                icon={()=> <FontAwesome5 name="pencil-ruler" size={24} color="black" />}
                onPress={()=>{ }}
                    />
                     
                    <Hr/>
                    
                    <DrawerItem 
                style={styles.drawerItem}
                labelStyle={styles.drawerItemLabel}
                label="Estoque" 
                icon={()=> <MaterialIcons name="inventory" size={24} color="black" />}
                onPress={()=>{ }}
                    />
                    <DrawerItem 
                style={styles.drawerItem}
                labelStyle={styles.drawerItemLabel}
                label="Relatorios" 
                icon={()=> <Octicons name="graph" size={24} color="black" />}
                onPress={()=>{ }}
                    />
                   
            </DrawerContentScrollView>
        )
    
} 