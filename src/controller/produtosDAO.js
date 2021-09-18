import React, { useState , useEffect} from "react";
import database from '../config/firebaseConfig'

const Produtos = (categoria) => {
  const [ produtos , setProdutos] = useState([])
  const getProdutos = () =>{
    console.log("-------- Produtos DAO ---------")
      database.collection("produtos").onSnapshot((query)=>{
          const list = []
          query.forEach((doc)=>{
              if(JSON.stringify(doc.data().idCateg) == categoria){
                list.push({...doc.data(), id: doc.id})
              }
              
          })
          setProdutos(list)
          console.log("DATA",list)
          
          console.log("******** FIM  PRODUTOS DAO ********")
         
      })
  }

  function deleteCategoria(id){
    database.collection("Produtos").doc(id).delete()
  }

useEffect(()=>{
  getProdutos()
},[])


return produtos
}



export default Produtos