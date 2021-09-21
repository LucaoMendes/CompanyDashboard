import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

export default function Cadastros({navigation}){
    React.useEffect(()=>{
        navigation.setOptions({
            title:'Cadastros'
        })
    })
    return(
        <View style={styles.container}>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Categorias</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Categorias</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Categorias</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Categorias</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Categorias</Text>
            </TouchableOpacity>
            </View>
        </View>
    )

}