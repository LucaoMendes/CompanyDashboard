import React from 'react';
import { NavigationContainer , useNavigation  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
//Pages
import Inicial from './src/pages/Inicial';
import Principal from './src/pages/Principal';
import Produtos from './src/pages/Produtos';
import styles from './src/components/navigationHeader/style'
import colors from './src/styles/colors'

import NavigationBottom from './src/components/navigationBottom';
import { headerRight , headerLeft } from './src/components/navigationHeader';
import {navi, navigationRef} from './src/config/RootNavigation'
import {useRoute} from '@react-navigation/native';
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

function inicialScreenStack({navigation}){
  return(
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
  )
}
function principalScreenStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="Principal">

        
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
            component={Principal}
            options={
              {
                headerShown: false
              }
            }/>
          
          <Stack.Screen
            name="Produtos"
            component={Produtos}
            options={
              {
                headerShown: false
              }
            }/>
          
      </Stack.Navigator>
  )
}
function produtosScreenStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="Produtos">
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
  )
}

export default class App extends React.Component  {
  render(){
  return (
    <NavigationContainer ref={navigationRef} >
      
      <Drawer.Navigator
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
      </Drawer.Navigator>
      <NavigationBottom route={this.props.activeItemKey}/>
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