import React from 'react'
import './App.css'
import Familha from './components/basicos/Familha'
import DiretaPai from './components/comunicacao/DiretaPai'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import FamilhaMembro from './components/basicos/FamilhaMebro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'

export default _ =>

  <div className="App">
    <h1>Fundamentos react </h1>
     <div className="Cards">
      <Card titulo="# 1 Exemplo de um Com Primeiro componete"  color="#588C73">
        <Primeiro></Primeiro>
      </Card>

      <Card titulo="# 2 Exemplo de um Com parametro" >
        <ComParametro titulo="segundo componente" subtitulo="muito da hora" />
      </Card>

      <Card titulo="# 3 Exemplo de um fragmento"  color="#E94C6F">
        <Fragmento></Fragmento>
      </Card>


      <Card titulo="# 4 Exemplo de um card" color="#FA6900">
        <Aleatorio max={10} min={15}/>
      </Card>

      <Card titulo="# 5 Componente com filhos" color="#FA6951">
        <Familha sobrenome="flauizno">
          <FamilhaMembro nome="Gabriel" />
          <FamilhaMembro nome="Samuel" />
          <FamilhaMembro nome="Walter" />
        </Familha>
      </Card>

      <Card titulo="# 6 Componente com Lista" color="#AB6978">
        <ListaAlunos></ListaAlunos>
      </Card>


      <Card titulo="# 9 Comunicação direta" color="#AB69777">
        <DiretaPai />
      </Card>

      <Card titulo="# 10 Comunicação indireta" color="#AB888">
        <IndiretaPai />
      </Card>
      <Card titulo="# 11 Comunicação indireta" color="#E4BAD44">
        <Input/>
      </Card>
    </div>
  </div>
