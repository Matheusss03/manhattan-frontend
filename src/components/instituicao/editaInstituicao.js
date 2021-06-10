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
            email: ''
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
            email: this.state.email
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
                        <div className="form-group col-md-3">
                            <label>Nome: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='nome'
                                    value={this.state.nome}
                                    onChange={this.onChangeNome}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>CNPJ: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='cnpj'
                                    value={this.state.cnpj}
                                    onChange={this.onChangeCNPJ}
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
                                    onChange={this.onChangeCnen}
                                    />
                        </div>
                        <div className="form-group col-md-4">
                            <label>E-mail: </label>
                            <input  type="email"
                                    className="form-control"
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Telefone: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='telefone'
                                    value={this.state.telefone}
                                    onChange={this.onChangeTelefone}
                                    />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Editar Instituição" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
  }

  export default withAuthenticationRequired(EditaInstituicao, {
    onRedirecting: () => <Loading />,
})