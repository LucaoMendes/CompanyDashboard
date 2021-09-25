import React, { Component } from "react";
import { ActivityIndicator, View , StyleSheet } from "react-native";
import {  Modal, Portal, Provider } from 'react-native-paper';
import { Button, Text, TextInput } from "react-native-paper";
import general from "../../styles/general";
import { MaterialIcons } from '@expo/vector-icons'; 
import database from '../../config/firebaseConfig'
import { getNextId } from "../../controller/categoriasDAO";


function Hr(){
  return(<View
      style={general.hr}
    />)
}
const styles = StyleSheet.create({
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default class cadCategoriaModel extends Component{
  
    constructor(props){
      super(props)
      this._isMounted = false;
      this.dbRef = database.collection('categorias')
      this.state = {
        title: '',
        isLoading: false
      }
    }
    componentDidMount() {
      this._isMounted = true;
  }
    inputValueUpdate = (val , prop) =>{
      const state = this.state
      state[prop] = val
      this.setState(state)
    }

    storeCategory(){
      if(this.state.title === ''){
        alert("O nome da categoria não pode ficar vazio")
      }else {
        this.setState({
          isLoading:true
        })
        this.dbRef.add({
          title: this.state.title
        }).then((res)=>{
          this.setState({
            title: '',
            isLoading: false
          })
          
        })
        .catch((err)=>{
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        })
      }
    }

    render(){
      if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#000"/>
          </View>
          
      )
      }
      return(
        <Provider>
            <Portal>
                <Modal  visible={this.props.visible} onDismiss={this.props.closeDisplay()} contentContainerStyle={general.modalContainer}>
                  <View>
                    <View>
                      <Text style={general.modalTitle}>
                      <MaterialIcons name="category" size={24} color="black" />
                          Adicionar Categoria
                      </Text>
                      <Hr/>
                    </View>
                    <View style={general.modalInputBox}>
                    <TextInput 
                      label="Nome da Categoria"
                      value={this.state.title}
                      onChangeText={(val)=>this.inputValueUpdate(val,'title')}
                        />
                    </View>
                    <Button mode="contained" icon="content-save" style={general.modalButton} onPress={() => this.storeCategory()}>
                        Adicionar
                    </Button>
                  </View>
                </Modal>
            </Portal>
        </Provider>
        
      )
    }
}