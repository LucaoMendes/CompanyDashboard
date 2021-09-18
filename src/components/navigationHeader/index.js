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
                    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                      <AntDesign style={styles.menuIcon} name="menuunfold" />
                    </TouchableOpacity>
                  </View>
                )
              },
              headerTintColor:colors.fontColorTopBar,
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
                     <AntDesign name="logout" style={styles.headerLogoutIcon} />
                    </View>
                    </TouchableOpacity>
                  </View>
                )
              }
            
        })
    )
}
