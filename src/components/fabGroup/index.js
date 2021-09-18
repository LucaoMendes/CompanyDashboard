import { FontAwesome5 , AntDesign } from '@expo/vector-icons'; 
import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Appbar, Badge , FAB ,  Portal, Provider  } from 'react-native-paper'
import styles from '../navigationBottom/style'
export default function NavigationBottom(){
    const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

    return(
        <Provider>
            <Portal>
                <FAB.Group
                style={styles.fabGroup}
                open={open}
                icon={open ? 'calendar-today' : 'plus'}
                actions={[
                    { icon: 'plus', onPress: () => console.log('Pressed add') },
                    {
                    icon: 'star',
                    label: 'Star',
                    onPress: () => console.log('Pressed star'),
                    },
                    {
                    icon: 'email',
                    label: 'Email',
                    onPress: () => console.log('Pressed email'),
                    },
                    {
                    icon: 'bell',
                    label: 'Remind',
                    onPress: () => console.log('Pressed notifications'),
                    small: false,
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