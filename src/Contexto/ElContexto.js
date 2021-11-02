import React, {createContext, useState} from 'react'
export const ElContext = createContext();

const ElProvider = (props)=>{
const [wishList,setWishList]= useState([]);
const [catalogo,setCatalogo]= useState([
  {codigo:1,titulo:"Programación", idioma:'ESP', desactivado:false},
  {codigo:2,titulo:"Aprende Python", idioma:'ESP',desactivado:false},     
  {codigo:3,titulo:"Precálculo", idioma:'ESP',desactivado:false},
  {codigo:4,titulo:"Ingenieria De Software", idioma:'ESP',desactivado:false}
]); 

const  agregar=(libro)=>{
  let tempCat= catalogo;
  let ini= tempCat.findIndex((element)=>element.codigo===libro.codigo);
  tempCat[ini].desactivado=true;
  let tempArr =[...wishList,libro];
  tempArr= tempArr.sort((a,b)=>a.codigo>b.codigo)
  setWishList(tempArr);
  setCatalogo(tempCat);
}
   
const  eliminar=(libro)=>{
let tempCat= catalogo;    
let ini= tempCat.findIndex((element)=>element.codigo===libro.codigo);
tempCat[ini].desactivado=false;
let tempWish= wishList.filter(c=>c.codigo!==libro.codigo)
setWishList(tempWish);
setCatalogo(tempCat);
}  

return(
  <ElContext.Provider
    value={{
      catalogo,
      wishList,
      eliminar,
      agregar
  }}>
    {props.children}
  </ElContext.Provider>
);}

export default ElProvider;