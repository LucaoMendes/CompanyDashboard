import React from 'react';
import { NavigationContainer , useNavigation  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
//Pages
import Inicial from './src/pages/Inicial';
import Principal from './src/pages/Principal';
import Produtos from './src/pages/Produtos';
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
            component={Principal}/>
          
          <Stack.Screen
            name="Produtos"
            component={Produtos}/>
          
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

export default function App() {
  return (
    <NavigationContainer>
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
              drawerLabel:'Categorias',
              headerShown:false}}
          />
          
          
        

      </Drawer.Navigator>
    </NavigationContainer>
    
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
  );
}
