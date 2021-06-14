import React from "react"
import { Route, Switch } from "react-router-dom"
import { Container } from "react-bootstrap"

import { NavBar, Footer, Profile, Construcao, LandingPage } from "./components"
import { CriaUsuario, ListaUsuario, EditaUsuario, MostraUsuario } from './components/usuarios'
import { CriaInstrumento, ListaInstrumento, EditaInstrumento, MostraInstrumento } from './components/instrumentos'
import { CriaDiarioCuriometro, ListaDiarioCuriometro, EditaDiarioCuriometro, MostraDiarioCuriometro } from "./components/curiometro"
import { CriaFonteSelada } from "./components/fontes"
import { CriaInstituicao, ListaInstituicao, EditaInstituicao, MostraInstituicao } from "./components/instituicao"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/construcao" component={Construcao} />
          <Route path="/usuario/add" component={CriaUsuario} />
          <Route path="/usuario/todos" component={ListaUsuario} />
          <Route path="/usuario/editar/:id" component={EditaUsuario} />
          <Route path="/usuario/mostrar/:id" component={MostraUsuario} />
          <Route path="/curiometro/add" component={CriaDiarioCuriometro} />
          <Route path="/curiometro/todos" component={ListaDiarioCuriometro} />
          <Route path="/curiometro/editar/:id" component={EditaDiarioCuriometro} />
          <Route path="/curiometro/mostrar/:id" component={MostraDiarioCuriometro} />
          <Route path="/instituicao/add" component={CriaInstituicao} />
          <Route path="/instituicao/todos" component={ListaInstituicao} />
          <Route path="/instituicao/editar/:id" component={EditaInstituicao} />
          <Route path="/instituicao/mostrar/:id" component={MostraInstituicao} />
          <Route path="/instrumento/add" component={CriaInstrumento} />
          <Route path="/instrumento/todos" component={ListaInstrumento} />
          <Route path="/instrumento/editar/:id" component={EditaInstrumento} />
          <Route path="/instrumento/mostrar/:id" component={MostraInstrumento} />
          <Route path="/selada/add" component={CriaFonteSelada} />
        </Switch>
      </Container>
      <Footer />
    </div>
  )
}

export default App