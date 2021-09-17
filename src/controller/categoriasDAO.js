import React, { useState , useEffect} from "react";
import database from '../config/firebaseConfig'

const Categorias = () => {
  const [ categorias , setCategorias] = useState([])
  const getCategorias = () =>{
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
  }

  function deleteCategoria(id){
    database.collection("categorias").doc(id).delete()
  }

useEffect(()=>{
  getCategorias()
},[])


return categorias
}



export default Categorias