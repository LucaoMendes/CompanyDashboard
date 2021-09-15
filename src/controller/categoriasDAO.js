import React, { useState , useEffect} from "react";
import database from '../config/firebaseConfig'
const Categorias = () => {
  const [ categorias , setCategorias] = useState([])

  function deleteCategoria(id){
    database.collection("categorias").doc(id).delete()
  }

useEffect(()=>{
  console.log("-------- CATEGORIAS DAO ---------")
    database.collection("categorias").onSnapshot((query)=>{
        const list = []
        query.forEach((doc)=>{
            list.push({...doc.data(), id: doc.id})
        })
        setCategorias(list)
        console.log("DATA",list)
        console.log("******** FIM  CATEGORIAS DAO ********")
    })
  
},[])
return categorias
}



export default Categorias