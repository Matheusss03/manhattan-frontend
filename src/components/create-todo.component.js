import React, { Component } from 'react'
import axios from 'axios'

export default class CreateTodo extends Component {

    constructor(props) {
        super(props)
  
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeCPF = this.onChangeCPF.bind(this)
        this.onChangeSenha = this.onChangeSenha.bind(this)
        this.onChangeTipo = this.onChangeTipo.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            nome: '',
            cpf: '',
            senha: '',
            tipo: '',
            email: ''
        }
    }
  
    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }
  
    onChangeCPF(e) {
        this.setState({
            cpf: e.target.value
        });
    }
  
    onChangeSenha(e) {
        this.setState({
            senha: e.target.value
        });
    }
  
    onChangeTipo(e) {
      this.setState({
          tipo: e.target.value
      });
    }
  
    onChangeEmail(e) {
      this.setState({
          email: e.target.value
      });
    }
  
    onSubmit(e) {
        e.preventDefault();
  
        console.log(`Form submitted:`)
        console.log(`Nome: ${this.state.nome}`)
        console.log(`CPF: ${this.state.cpf}`)
        console.log(`Senha: ${this.state.senha}`)
        console.log(`Tipo: ${this.state.tipo}`)
        console.log(`E-mail: ${this.state.email}`)
  
        const newUser = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            senha: this.state.senha,
            tipo: this.state.tipo,
            email: this.state.email,
        }
  
        axios.post('http://localhost:3000/auth/register', newUser)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            nome: '',
            cpf: '',
            senha: '',
            tipo: '',
            email: '',
        })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Novo Usuário</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nome}
                                onChange={this.onChangeNome}
                                />
                    </div>
                    <div className="form-group">
                        <label>CPF: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.cpf}
                                onChange={this.onChangeCPF}
                                />
                    </div>
                    <div className="form-group">
                        <label>Senha: </label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.senha}
                                onChange={this.onChangeSenha}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tipo: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.tipo}
                                onChange={this.onChangeTipo}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Criar Usuário" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
  }