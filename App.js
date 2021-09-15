import React from 'react';
import { NavigationContainer , useNavigation  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Inicial from './src/pages/Inicial';
import Principal from './src/pages/Principal';
import Produtos from './src/pages/Produtos'

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">


        {/*Pagina de Login*/}
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
    </NavigationContainer>
  );
}
