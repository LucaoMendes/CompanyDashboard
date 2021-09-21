import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Cadastros from "../pages/Cadastros";



const Stack = createStackNavigator()
export default function PrincipalStack(){
    return(
        <Stack.Navigator initialRouteName="Cadastros">
          <Stack.Screen
            name="Cadastros"
            component={Cadastros}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    )
}