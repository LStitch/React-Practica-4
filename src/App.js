import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Libros from './Components/Libros';
import Lista from './Components/Lista';
import ElProvider from './Contexto/ElContexto';

function App(){
 
  return (
    <div className="App">
      <ElProvider>
        <Header/>
        <div className="Contenedores">
            <Libros/>
            <Lista/>            
        </div> 
      </ElProvider>
    </div>
  )

}

export default App;