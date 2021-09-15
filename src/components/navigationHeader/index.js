import React, { Component } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../../pages/Principal/style";
import colors from "../../styles/colors"


import { Avatar } from 'react-native-elements';


export default function navigationHeader({ navigation }) {
    return ( 
        navigation.setOptions({
            headerLeft: ()=>{
                return(
                  <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={()=> { navigation.navigate("Inicial") }}>
                      <AntDesign style={styles.menuIcon} name="menuunfold" color="black" />
                    </TouchableOpacity>
                  </View>
                )
              },
              headerTintColor:colors.fontColorPrimary,
              headerStyle: styles.header,
              title:'Nogueira Rações',
              headerRight: ()=>{
                return(
                  <View style={styles.headerRight}>
                    
                    <TouchableOpacity>
                    <Avatar rounded size={40} source={require('../../assets/user.png')} overlayContainerStyle={styles.avatar}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.containerLogout}>
                     <Text style={styles.headerRightText}>Lucas</Text>
                     <AntDesign name="logout" style={styles.headerLogoutIcon} color="black" />
                    </View>
                    </TouchableOpacity>
                  </View>
                )
              }
            
        })
    )
}
