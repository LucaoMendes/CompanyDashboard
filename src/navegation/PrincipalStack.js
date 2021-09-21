import React from "react";
import Login from "../pages/Login";
import PrincipalDrawer from './PrincipalDrawer'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export default function PrincipalStack({navigation}){
    return(
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PrincipalDrawer"
            component={PrincipalDrawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    )
}