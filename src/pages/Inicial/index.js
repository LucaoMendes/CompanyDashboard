import React , { useEffect } from 'react'
import { 
    Text, 
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import styles from './style'
export default function Inicial({navigation}) {
    
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            
            <View style={styles.container}>  
                
                <View style={styles.bigCircle}></View>
                <View style={styles.smallCircle}></View>

                <View style={styles.centerizedView}>
                    <View style={styles.authBox}>
                        <View style={styles.logoBox}>
                        <FontAwesome name="cogs"
                            size={50}
                            color="#fff"/>
                            <Text style={styles.logoLabel}>PDV</Text>
                        </View>
                        <Text style={styles.loginTitleText}>
                            Login
                        </Text>

                        <View style={styles.hr}></View>

                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Usuário</Text>
                            <TextInput 
                            style={styles.input}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                             />
                        </View>

                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Senha</Text>
                            <TextInput 
                            style={styles.input}
                            secureTextEntry={true}
                            textContentType='password'
                             />
                        </View>

                        <TouchableOpacity style={styles.loginButton} onPress={()=>{
                            navigation.navigate("Principal")
                        }}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>

        </TouchableWithoutFeedback>
    )

}
