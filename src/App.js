import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import CriaUsuario from "./components/criaUsuario"
import ListaUsuario from "./components/listaUsuario"
import EditaUsuario from "./components/editaUsuario"

import CriaDiarioCuriometro from "./components/criaDiarioCuriometro"
import ListaDiarioCuriometro from "./components/listaDiarioCuriometro"
import EditaDiarioCuriometro from "./components/editaDiarioCuriometro"

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
                  <Link to="auth/todos" className="nav-link">Usuários</Link>
                </li>
                <li className="navbar-item">
                  <Link to="auth/add" className="nav-link">Adicionar Usuário</Link>
                </li>
                <li className="navbar-item">
                  <Link to="curiometro/todos" className="nav-link">Atividades Medidas</Link>
                </li>
                <li className="navbar-item">
                  <Link to="curiometro/add" className="nav-link">Adicionar Atividade - Curiômetro</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/auth/add" component={CriaUsuario} />
          <Route path="/auth/todos" component={ListaUsuario} />
          <Route path="/auth/update/:id" component={EditaUsuario} />
          <Route path="/curiometro/add" component={CriaDiarioCuriometro} />
          <Route path="/curiometro/todos" component={ListaDiarioCuriometro} />
          <Route path="/curiometro/update/:id" component={EditaDiarioCuriometro} />
        </div>
      </Router>
    );
  }
}

export default App