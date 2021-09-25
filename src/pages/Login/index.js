import React , { useEffect } from 'react'
import { 
    Text, 
    View,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

import {
    TextInput,
    HelperText
} from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import styles from './style'
export default function Login({navigation}) {
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);

    const hasErrors = () => {
        return !text.includes('@') && !(text == '');
    };
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            
            <View style={styles.container}>  
                
                <View style={styles.bigCircle}></View>
                <View style={styles.smallCircle}></View>

                <View style={styles.centerizedView}>
                    <View style={styles.authBox}>
                        <View style={styles.logoBox}>
                        <FontAwesome name="sellsy" style={styles.logoIcon}
                            size={50}
                            color="#fff"/>
                            <Text style={styles.logoLabel}>Company{"\n"}Dashboard</Text>
                        </View>
                        <Text style={styles.loginTitleText}>
                            Login
                        </Text>

                        <View style={styles.hr}></View>

                        <View style={styles.inputBox}>
                            <TextInput 
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            label="Usuário"
                            value={text} onChangeText={onChangeText}
                             />
                            <HelperText type="error" visible={hasErrors()}>
                                Usuário Invalido
                            </HelperText>
                        </View>

                        <View style={styles.inputBox}>
                            <TextInput 
                            secureTextEntry={true}
                            textContentType='password'
                            label="Senha"
                            right={<TextInput.Icon name="eye" />}
                             />
                        </View>

                        <TouchableOpacity style={styles.loginButton} onPress={()=>{
                            navigation.navigate("PrincipalDrawer")
                        }}>
                            <Text style={styles.loginButtonText}>Entrar</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>

        </TouchableWithoutFeedback>
    )

}
