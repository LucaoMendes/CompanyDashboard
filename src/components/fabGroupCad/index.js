import React from "react";
import { FAB, Portal, Provider } from 'react-native-paper';
import { MaterialIcons , AntDesign } from '@expo/vector-icons';





export default function FabGroupCad(){
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
    return(
        <Provider>
            <Portal>
                <FAB.Group
                open={open}
                icon={open ? 'close' : 'plus'}
                actions={[
                    {
                    icon: ()=><MaterialIcons name="payments" size={24} color="grey" />,
                    label: 'Pagamentos',
                    onPress: () => console.log('Pressed star'),
                    },
                    {
                    icon: ()=><AntDesign name="user" size={24} color="grey" />,
                    label: 'Clientes',
                    onPress: () => console.log('Pressed star'),
                    },
                    {
                    icon: ()=><AntDesign name="addusergroup" size={24} color="grey" />,
                    label: 'Fornecedores',
                    onPress: () => console.log('Pressed star'),
                    },
                    {
                    icon: ()=><AntDesign name="adduser" size={24} color="grey" />,
                    label: 'Usuários',
                    onPress: () => console.log('Pressed star'),
                    },
                    {
                    icon: ()=><MaterialIcons name="inventory" size={24} color="grey" />,
                    label: 'Produtos',
                    onPress: () => console.log('Pressed email'),
                    },
                    {
                    icon: ()=><MaterialIcons name="category" size={24} color='grey'/>,
                    label: 'Categorias',
                    onPress: () => console.log('Pressed notifications'),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                    // do something if the speed dial is open
                    }
                }}
                />
            </Portal>
        </Provider>
    )
}