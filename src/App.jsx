import { useState } from 'react'
import './App.css'
import Mensagem from './assets/components/mensagem';
import Frase from './assets/components/frase';
import Calculadora from './assets/components/Calculadora';

function Saudacao() {
  return <h1>helo world 2</h1>;
}

function App() {

  return (
    <>
    <Saudacao/>
    <Mensagem texto={"meu texto"}/>
    <Frase/>
    <Calculadora/>
    </>
  )
}

export default App
