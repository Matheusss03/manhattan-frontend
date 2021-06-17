import React, { Component } from 'react'
import axios from 'axios'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class EditaUsuario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            cpf: '',
            senha: '',
            tipo: '',
            email: '',
            cnen: '',
            celular: '',
            conselho: ''
        }
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/usuario/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    nome: response.data.nome,
                    cpf: response.data.cpf,
                    senha: response.data.senha,
                    tipo: response.data.tipo,
                    email: response.data.email,
                    cnen: response.data.cnen,
                    celular: response.data.celular,
                    conselho: response.data.conselho
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const data = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            senha: this.state.senha,
            tipo: this.state.tipo,
            email: this.state.email,
            cnen: this.state.cnen,
            celular: this.state.celular,
            conselho: this.state.conselho,
        };
        console.log(data);
        axios.put('https://backend-manhattan.herokuapp.com/usuario/update/'+this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/usuario/todos/')
            })
            .catch(err => {
                console.log("Erro ao atualizar usuário!")
            })
    }

    render() {
        return (
            <div>
                <h3>Editar Usuário</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-group col-md-4">
                            <label>Nome: </label>
                            <input  type="text"
                                    name='nome'
                                    className="form-control"
                                    value={this.state.nome}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>CPF: </label>
                            <input  type="text"
                                    name='cpf'
                                    className="form-control"
                                    value={this.state.cpf}
                                    onChange={this.onChange}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-4">
                            <label>Email: </label>
                            <input  type="email"
                                    className="form-control"
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Senha: </label>
                            <input  type="password"
                                    name='senha'
                                    className="form-control"
                                    value={this.state.senha}
                                    onChange={this.onChange}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>CNEN: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='cnen'
                                    value={this.state.cnen}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                                <label>Conselho: </label>
                                <select id="inputState" value={this.state.conselho} name='conselho' className="form-control" onChange={this.onChange}>
                                    <option name='conselho' selected>Selecione abaixo...</option>
                                    <option name='conselho' value='CRM' >CRM</option>
                                    <option name='conselho' value='CRF' >CRF</option>
                                    <option name='conselho' value='COREN' >COREN</option>
                                    <option name='conselho' value='CRBM' >CRBM</option>
                                    <option name='conselho' value='CRTR' >CRTR</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Celular: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='celular' 
                                    value={this.state.celular}
                                    onChange={this.onChange}
                                    />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipo" 
                                    id="tipoResponsavel" 
                                    value="Responsável Técnico"
                                    checked={this.state.tipo==='Responsável Técnico'} 
                                    onChange={this.onChange}
                                    />
                            <label className="form-check-label">Responsável Técnico</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipo" 
                                    id="tipoSupervisor" 
                                    value="Supervisor de Radioproteção"
                                    checked={this.state.tipo==='Supervisor de Radioproteção'} 
                                    onChange={this.onChange}
                                    />
                            <label className="form-check-label">Supervisor de Radioproteção</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipo" 
                                    id="tipoOperador" 
                                    value="Operador"
                                    checked={this.state.tipo==='Operador'} 
                                    onChange={this.onChange}
                                    />
                            <label className="form-check-label">Operador</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipo" 
                                    id="tipoTitular" 
                                    value="Físico"
                                    checked={this.state.tipo==='Físico'} 
                                    onChange={this.onChange}
                                    />
                            <label className="form-check-label">Físico</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="tipo" 
                                    id="tipoTitular" 
                                    value="Titular"
                                    checked={this.state.tipo==='Titular'} 
                                    onChange={this.onChange}
                                    />
                            <label className="form-check-label">Titular</label>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Atualizar Usuário" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withAuthenticationRequired(EditaUsuario, {
    onRedirecting: () => <Loading />,
})