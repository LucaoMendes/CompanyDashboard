import React from 'react';
import { View , Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
//Pages
import Inicial from './src/pages/Inicial';
import Principal from './src/pages/Principal';
import Produtos from './src/pages/Produtos';
import Cadastros from './src/pages/Cadastros';

import styles from './src/components/navigationHeader/style'
import colors from './src/styles/colors'

import DrawerContent from './src/components/drawerContent';
import { headerRight , headerLeft } from './src/components/navigationHeader';
import {navi, navigationRef} from './src/config/RootNavigation'
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

function returnStackNavigation(initialRouteName){
  return(
    <Stack.Navigator initialRouteName={initialRouteName}>

        
        <Stack.Screen 
          name="Inicial" 
          component={Inicial} 
          options={{headerShown: false}}
          />

          <Stack.Screen
            name="Principal"
            component={Principal}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Produtos"
            component={Produtos}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Cadastros"
            component={Cadastros}
            options={{headerShown: false}}
          />
      </Stack.Navigator>
  )
}
function inicialScreenStack({navigation}){
  return(
    returnStackNavigation("Inicial")
  )
}
function principalScreenStack({navigation}){
  return(
    returnStackNavigation("Principal")
  )
}
function produtosScreenStack({navigation}){
  return(
    returnStackNavigation("Produtos")
  )
}
function cadastrosScreenStack({navigation}){
  return(
    returnStackNavigation("Cadastros")
  )
}
export default class App extends React.Component  {
  render(){
  return (
    <NavigationContainer ref={navigationRef} >
      
      <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props}/>}
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle:{ marginVertical:5 }
        }}>
          <Drawer.Screen
            name="inicial" 
            component={inicialScreenStack} 
            options={{ 
              drawerLabel:'Login',
              headerShown:false
            }}
          />

          <Drawer.Screen
            name="principal" 
            component={principalScreenStack} 
            options={{ 
              headerRight:()=>{
                return(headerRight())
              },
              headerTintColor:colors.fontColorTopBar,
              headerStyle: styles.header,
              title:"Categorias",
              drawerLabel:'Categorias',
              headerShown:true}}
          />
          <Drawer.Screen
            name="produtos" 
            component={produtosScreenStack} 
          />
          <Drawer.Screen
            name="cadastros" 
            component={cadastrosScreenStack} 
          />
      </Drawer.Navigator>
    </NavigationContainer>
    )
            }
}

/*
    <NavigationContainer>
       
      <Stack.Navigator initialRouteName="Inicial">

        
        <Stack.Screen 
          name="Inicial" 
          component={Inicial} 
          options={
            {
              headerShown: false
            }
          }
          />

          <Stack.Screen
            name="Principal"
            component={Principal}/>
          
          <Stack.Screen
            name="Produtos"
            component={Produtos}/>
          
      </Stack.Navigator>
    </NavigationContainer> */