import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'


//STACKS
import ItensStack from './ItensStack'
import CadastrosStack from './CadastrosStack'

//Estilos
import styles from '../../src/components/navigationHeader/style'
import colors from '../../src/styles/colors'

//Componentes
import { headerRight } from '../../src/components/navigationHeader';
import DrawerContent from '../../src/components/drawerContent'

const Drawer = createDrawerNavigator();


export default function PrincipalDrawer(){
    return(
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props}/>}
            initialRouteName="Principal"
            screenOptions={{
            activeTintColor: '#e91e63',
            itemStyle:{ marginVertical:5 }
            }}>
            <Drawer.Screen
                name="ItensStack" 
                component={ItensStack} 
                options={{ 
                headerRight:()=>{
                    return(headerRight())
                },
                headerTintColor:colors.fontColorTopBar,
                headerStyle: styles.header,
                title:"Nogueira Rações",
                drawerLabel:'Categorias',
                headerShown:true}}
            />
            <Drawer.Screen
                name="CadastrosStack" 
                component={CadastrosStack} 
                options={{ 
                headerRight:()=>{
                    return(headerRight())
                },
                headerTintColor:colors.fontColorTopBar,
                headerStyle: styles.header,
                title:"Cadastros",
                drawerLabel:'Categorias',
                headerShown:true,}}
                
            />
      </Drawer.Navigator>
    )
}