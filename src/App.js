import React from "react"
import { Route, Switch } from "react-router-dom"
import { Container } from "react-bootstrap"

import { NavBar, Footer, Profile, Construcao } from "./components"
import { CriaUsuario, ListaUsuario, EditaUsuario, MostraUsuario } from './components/usuarios'
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
          <Route path="/selada/add" component={CriaFonteSelada} />
        </Switch>
      </Container>
      <Footer />
    </div>
  )
}

export default App










/*
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { NavDropdown } from 'react-bootstrap'

import "bootstrap/dist/css/bootstrap.min.css"

import CriaUsuario from "./components/criaUsuario"
import ListaUsuario from "./components/listaUsuario"
import EditaUsuario from "./components/editaUsuario"

import CriaDiarioCuriometro from "./components/criaDiarioCuriometro"
import ListaDiarioCuriometro from "./components/listaDiarioCuriometro"
import EditaDiarioCuriometro from "./components/editaDiarioCuriometro"

import CriaFonteSelada from "./components/criaFonteSelada"

import Profile from "./components/profile"

import AuthNav from "./components/auth-nav"

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Manhattan</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
              
                <li className="navbar-item">
                  <NavDropdown title="Usuários">
                    <NavDropdown.Item>
                      <Link to="/auth/add" className="nav-link">Adicionar</Link>                      
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/auth/todos" className="nav-link">Mostrar Todos</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                
                <li className="navbar-item">
                  <NavDropdown title="Calibrador de Dose">
                    <NavDropdown.Item>
                      <Link to="/curiometro/add" className="nav-link">Adicionar</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/curiometro/todos" className="nav-link">Mostrar Todos</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>

                <li className="navbar-item">
                  <NavDropdown title="Fontes">
                    <NavDropdown.Item>
                      <Link to="/selada/add" className="nav-link">Adicionar Fonte Selada</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/curiometro/todos" className="nav-link">Fontes Seladas</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.Item>
                      <Link to="/curiometro/add" className="nav-link">Adicionar Fonte Não-Seladas</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/curiometro/todos" className="nav-link">Fontes Não-Seladas</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>

                <li className="navbar-item">
                  <NavDropdown title="Instrumentos">
                    <NavDropdown.Item>
                      <Link to="/curiometro/add" className="nav-link">Adicionar</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/curiometro/todos" className="nav-link">Mostrar Todos</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>

                <li className="navbar-item">
                  <NavDropdown title="Instituições">
                    <NavDropdown.Item>
                      <Link to="/curiometro/add" className="nav-link">Adicionar</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/curiometro/todos" className="nav-link">Mostrar Todos</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>

                <li>
                  <Link to="/profile" className="nav-link">Perfil</Link>
                </li>
                  
                <li className="navbar-item">
                  <AuthNav/>
                </li>

              </ul>
            </div>
          </nav>
          <br/>
          <Switch>
            <Route exact path="/auth/add" component={CriaUsuario} />
            <Route exact path="/auth/todos" component={ListaUsuario} />
            <Route exact path="/auth/update/:id" component={EditaUsuario} />
            <Route exact path="/curiometro/add" component={CriaDiarioCuriometro} />
            <Route exact path="/curiometro/todos" component={ListaDiarioCuriometro} />
            <Route exact path="/curiometro/editar/:id" component={EditaDiarioCuriometro} />
            <Route exact path="/selada/add" component={CriaFonteSelada} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
*/