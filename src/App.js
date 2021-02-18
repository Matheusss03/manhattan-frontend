import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import CriaUsuario from "./components/criaUsuario"
import EditTodo from "./components/edit-todo.component"
import TodosList from "./components/todos-list.component"
import CriaDiarioCuriometro from "./components/criaDiarioCuriometro"
import ListaDiarioCuriometro from "./components/listaDiarioCuriometro"

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
                  <Link to="/" className="nav-link">Usuários</Link>
                </li>
                <li className="navbar-item">
                  <Link to="auth/register" className="nav-link">Adicionar Usuário</Link>
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
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/auth/register" component={CriaUsuario} />
          <Route path="/curiometro/add" component={CriaDiarioCuriometro} />
          <Route path="/curiometro/todos" component={ListaDiarioCuriometro} />
        </div>
      </Router>
    );
  }
}

export default App