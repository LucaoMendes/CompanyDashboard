import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Categorias from "../pages/Categorias";
import Produtos from "../pages/Produtos";



const Stack = createStackNavigator()
export default function ItensStack(){
    return(
        <Stack.Navigator initialRouteName="Categorias">
          <Stack.Screen
            name="Categorias"
            component={Categorias}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Produtos"
            component={Produtos}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    )
}