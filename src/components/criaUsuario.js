import React, { Component } from 'react'
import axios from 'axios'
import { cpfMask, celMask, cnenMask } from '../utils/masks'

export default class CriaUsuario extends Component {

    constructor(props) {
        super(props)
  
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeCPF = this.onChangeCPF.bind(this)
        this.onChangeSenha = this.onChangeSenha.bind(this)
        this.onChangeTipo = this.onChangeTipo.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeCnen = this.onChangeCnen.bind(this)
        this.onChangeCelular = this.onChangeCelular.bind(this)
        this.onChangeConselho = this.onChangeConselho.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            nome: '',
            cpf: '',
            senha: '',
            tipo: '',
            email: '',
            cnen: '',
            celular: '',
            conselho: '',
        }
    }
  
    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }
  
    onChangeCPF(e) {
        this.setState({
            cpf: cpfMask(e.target.value)
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

    onChangeCnen(e) {
      this.setState({
          cnen: cnenMask(e.target.value)
      });
    }

    onChangeCelular(e) {
      this.setState({
          celular: celMask(e.target.value)
      });
    }

    onChangeConselho(e) {
      this.setState({
          conselho: e.target.value
      });
    }
  
    onSubmit(e) {
        e.preventDefault();
  
        const newUser = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            senha: this.state.senha,
            tipo: this.state.tipo,
            email: this.state.email,
            cnen: this.state.cnen,
            celular: this.state.celular,
            conselho: this.state.conselho,
        }
  
        axios.post('https://backend-manhattan.herokuapp.com/auth/add', newUser)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            nome: '',
            cpf: '',
            senha: '',
            tipo: '',
            email: '',
            cnen: '',
            celular: '',
            conselho: '',
        })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Novo Usuário</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-group col-md-4">
                            <label>Nome: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.nome}
                                    onChange={this.onChangeNome}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>CPF: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.cpf}
                                    onChange={this.onChangeCPF}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-4">
                            <label>Email: </label>
                            <input  type="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Senha: </label>
                            <input  type="password"
                                    className="form-control"
                                    value={this.state.senha}
                                    onChange={this.onChangeSenha}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>CNEN: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.cnen}
                                    onChange={this.onChangeCnen}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                                <label>Conselho: </label>
                                <select id="inputState" className="form-control">
                                    <option selected>Selecione...</option>
                                    <option value='CRM' selected={this.state.conselho==='CRM'} onChange={this.onChangeConselho}>CRM</option>
                                    <option value='CRF' selected={this.state.conselho==='CRF'} onChange={this.onChangeConselho}>CRF</option>
                                    <option value='COREN' selected={this.state.conselho==='COREN'} onChange={this.onChangeConselho}>COREN</option>
                                    <option value='CRBM' selected={this.state.conselho==='CRBM'} onChange={this.onChangeConselho}>CRBM</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Celular: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.celular}
                                    onChange={this.onChangeCelular}
                                    />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipoOpcoes" 
                                    id="tipoResponsavel" 
                                    value="Responsável Técnico"
                                    checked={this.state.tipo==='Responsável Técnico'} 
                                    onChange={this.onChangeTipo}
                                    />
                            <label className="form-check-label">Responsável Técnico</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipoOpcoes" 
                                    id="tipoSupervisor" 
                                    value="Supervisor de Radioproteção"
                                    checked={this.state.tipo==='Supervisor de Radioproteção'} 
                                    onChange={this.onChangeTipo}
                                    />
                            <label className="form-check-label">Supervisor de Radioproteção</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipoOpcoes" 
                                    id="tipoOperador" 
                                    value="Operador"
                                    checked={this.state.tipo==='Operador'} 
                                    onChange={this.onChangeTipo}
                                    />
                            <label className="form-check-label">Operador</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipoOpcoes" 
                                    id="tipoTitular" 
                                    value="Titular"
                                    checked={this.state.tipo==='Titular'} 
                                    onChange={this.onChangeTipo}
                                    />
                            <label className="form-check-label">Titular</label>
                        </div>
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