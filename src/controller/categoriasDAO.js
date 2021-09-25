import React, { useState , useEffect} from "react";
import database from '../config/firebaseConfig'

const Categorias = () => {
  const [ categorias , setCategorias] = useState([])
  const list = []
  const getCategorias = () =>{
    console.log("-------- CATEGORIAS DAO ---------")
      database.collection("categorias").orderBy('title','asc').onSnapshot((query)=>{
          
          query.forEach((doc)=>{
              list.push({...doc.data(), id: doc.id})
          })
          setCategorias(list)
          
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


export function getNextId(){
  database.collection('categorias').get().then(snap=>{size = snap.size})
  return ++size
}
export default Categorias