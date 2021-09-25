import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import styles from "./style";
import FabGroupCad from "../../components/fabGroupCad";
export default function Cadastros({navigation}){
    
    return(
        <View style={styles.container}>
            
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Categorias</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Produtos</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Vendedores</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Fornecedores</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Clientes</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.columnBtn}>
            <TouchableOpacity style={styles.btnOption}>
                <Text style={styles.btnLabel}>Formas de Pagamento</Text>
            </TouchableOpacity>
            </View>

            <FabGroupCad/>
            
        </View>
    )

}