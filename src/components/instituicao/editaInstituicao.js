import React, { Component } from 'react'
import axios from 'axios'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class EditaInstituicao extends Component {

    constructor(props) {
        super(props)
  
        this.state = {
            nome: '',
            cnpj: '',
            cnen: '',
            telefone: '',
            email: '',
            razao: '',
            grupo: '',
            cep: '',
            bairro: '',
            cidade: '',
            uf: '',
            logradouro: '',
            complemento: ''
        }
    }
  
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newInstituicao = {
            nome: this.state.nome,
            cnpj: this.state.cnpj,
            cnen: this.state.cnen,
            telefone: this.state.telefone,
            email: this.state.email,
            razao: this.state.razao,
            grupo: this.state.grupo,
            cep: this.state.cep,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            uf: this.state.uf,
            logradouro: this.state.logradouro,
            complemento: this.state.complemento
        }
  
        axios.put('https://backend-manhattan.herokuapp.com/instituicao/update', newInstituicao)
            .then(res => {
                this.props.history.push('/instituição/todos/')
            })
            .catch(err => {
                console.log("Erro ao atualizar instituição!")
            })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Editar Instituição</h3>
                <br/>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-row">
                            <div className="form-group col-md-5">
                                <label>Nome Fantasia: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='nome'
                                        value={this.state.nome}
                                        onChange={this.onChange}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-5">
                                <label>Razão Social: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='razao'
                                        value={this.state.razao}
                                        onChange={this.onChange}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-2">
                                <label>CNPJ: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='cnpj'
                                        value={this.state.cnpj}
                                        onChange={this.onChange}
                                        />
                            </div>
                            <div className="form-group col-md-4">
                                <label>E-mail: </label>
                                <input  type="email"
                                        className="form-control"
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-2">
                                <label>CNEN: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='cnen'
                                        value={this.state.cnen}
                                        onChange={this.onChange}
                                        />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Telefone: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='telefone'
                                        value={this.state.telefone}
                                        onChange={this.onChange}
                                        />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Grupo da Instalação: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='grupo'
                                        value={this.state.grupo}
                                        onChange={this.onChange}
                                        />
                            </div>
                        </div>
                        <hr /> <br />
                        <h4>Endereço</h4>
                        <br/>
                        <div class="form-row">
                            <div className="form-group col-md-2">
                                <label>CEP: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='cep'
                                        value={this.state.cep}
                                        onChange={this.onChange}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-4">
                                <label>Logradouro: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='logradouro'
                                        value={this.state.logradouro}
                                        onChange={this.onChange}
                                        />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Complemento: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='complemento'
                                        value={this.state.complemento}
                                        onChange={this.onChange}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label>Bairro: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='bairro'
                                        value={this.state.bairro}
                                        onChange={this.onChange}
                                        />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Cidade: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='cidade'
                                        value={this.state.cidade}
                                        onChange={this.onChange}
                                        />
                            </div>
                            <div className="form-group col-md-1">
                                <label>UF: </label>
                                <input  type="text"
                                        className="form-control"
                                        name='uf'
                                        value={this.state.uf}
                                        onChange={this.onChange}
                                        />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Salvar Modificações" className="btn btn-primary" />
                        </div>
                    </form>
            </div>
        )
    }
  }

  export default withAuthenticationRequired(EditaInstituicao, {
    onRedirecting: () => <Loading />,
})