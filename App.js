import React from 'react';
import { View , Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
//Pages
import Inicial from './src/pages/Login';
import Principal from './src/pages/Categorias';
import Produtos from './src/pages/Produtos';
import Cadastros from './src/pages/Cadastros';

import styles from './src/components/navigationHeader/style'
import colors from './src/styles/colors'

import DrawerContent from './src/components/drawerContent';
import { headerRight , headerLeft } from './src/components/navigationHeader';
import {navi, navigationRef} from './src/config/RootNavigation'
import PrincipalStack from './src/navegation/PrincipalStack';

export default class App extends React.Component  {
  render(){
  return (
    <NavigationContainer ref={navigationRef} >
      <PrincipalStack/>      
    </NavigationContainer>
    )
  }
}
