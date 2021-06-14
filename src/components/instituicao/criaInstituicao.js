import React, { Component } from 'react'
import axios from 'axios'
import { cnpjMask, cnenMask, celMask } from '../../utils/masks'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class CriaInstituicao extends Component {

    constructor(props) {
        super(props)
  
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeCNPJ = this.onChangeCNPJ.bind(this)
        this.onChangeCnen = this.onChangeCnen.bind(this)
        this.onChangeTelefone = this.onChangeTelefone.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeRazao = this.onChangeRazao.bind(this)
        this.onChangeCEP = this.onChangeCEP.bind(this)
        this.onChangeBairro = this.onChangeBairro.bind(this)
        this.onChangeCidade = this.onChangeCidade.bind(this)
        this.onChangeUf = this.onChangeUf.bind(this)
        this.onChangeLogradouro = this.onChangeLogradouro.bind(this)
        this.onChangeComplemento = this.onChangeComplemento.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        this.onChangeCNPJBuscado = this.onChangeCNPJBuscado.bind(this)
  
        this.state = {
            nome: '',
            cnpj: '',
            cnen: '',
            telefone: '',
            email: '',
            razao: '',
            cep: '',
            bairro: '',
            cidade: '',
            uf: '',
            logradouro: '',
            complemento: '',
            open: false,
            cnpj_buscado: ''
        }
    }
  
    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }
  
    onChangeCNPJ(e) {
        this.setState({
            cnpj: cnpjMask(e.target.value)
        });
    }
  
    onChangeCnen(e) {
        this.setState({
            cnen: cnenMask(e.target.value)
        });
    }
  
    onChangeTelefone(e) {
        this.setState({
            telefone: celMask(e.target.value)
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeRazao(e) {
        this.setState({
            razao: e.target.value
        })
    }

    onChangeCEP(e) {
        this.setState({
            cep: e.target.value
        })
    }

    onChangeBairro(e) {
        this.setState({
            bairro: e.target.value
        })
    }

    onChangeCidade(e) {
        this.setState({
            cidade: e.target.value
        })
    }

    onChangeUf(e) {
        this.setState({
            uf: e.target.value
        })
    }

    onChangeLogradouro(e) {
        this.setState({
            logradouro: e.target.value
        })
    }

    onChangeComplemento(e) {
        this.setState({
            complemento: e.target.value
        })
    }

    onChangeCNPJBuscado(e) {
        this.setState({
            cnpj_buscado: e.target.value
        })
    }

    onUpdate = (e) => {
        e.preventDefault()

        this.setState((currentState) => ({open: !currentState.open}))

        axios.get('https://brasilapi.com.br/api/cnpj/v1/'+this.state.cnpj_buscado)
            .then(response => {
                this.setState({
                    nome: response.data.nome_fantasia,
                    cnpj: response.data.cnpj,
                    telefone: response.data.ddd_telefone_1,
                    razao: response.data.razao_social,
                    cep: response.data.cep,
                    bairro: response.data.bairro,
                    cidade: response.data.municipio,
                    uf: response.data.uf,
                    logradouro: response.data.logradouro,
                    complemento: response.data.complemento,
                })
            })
                .catch(function (error) {
                    console.log(error);   
            })
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
            cep: this.state.cep,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            uf: this.state.uf,
            logradouro: this.state.logradouro,
            complemento: this.state.complemento
        }
  
        axios.post('https://backend-manhattan.herokuapp.com/instituicao/add', newInstituicao)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            nome: '',
            cnpj: '',
            cnen: '',
            telefone: '',
            email: '',
            razao: '',
            cep: '',
            bairro: '',
            cidade: '',
            uf: '',
            logradouro: '',
            complemento: '',
            open: false,
            cnpj_buscado: ''
        })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Nova Instituição</h3>
                <br/>
                <form onSubmit={this.onUpdate}>
                    <div className="form-group col-md-2">
                        <label>CNPJ: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.cnpj_buscado}
                                onChange={this.onChangeCNPJBuscado}
                                />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="submit" value="Preencher Instituição" className="btn btn-primary" />
                    </div>
                </form>

                    <hr /> <br />

                    {(this.state.open &&  
                    <form onSubmit={this.onSubmit}>
                        <div class="form-row">
                            <div className="form-group col-md-5">
                                <label>Nome Fantasia: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.nome}
                                        onChange={this.onChangeNome}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-5">
                                <label>Razão Social: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.razao}
                                        onChange={this.onChangeRazao}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-2">
                                <label>CNPJ: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.cnpj}
                                        onChange={this.onChangeCNPJ}
                                        />
                            </div>
                            <div className="form-group col-md-4">
                                <label>E-mail: </label>
                                <input  type="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-2">
                                <label>CNEN: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.cnen}
                                        onChange={this.onChangeCnen}
                                        />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Telefone: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.telefone}
                                        onChange={this.onChangeTelefone}
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
                                        value={this.state.cep}
                                        onChange={this.onChangeCEP}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-4">
                                <label>Logradouro: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.logradouro}
                                        onChange={this.onChangeLogradouro}
                                        />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Complemento: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.complemento}
                                        onChange={this.onChangeComplemento}
                                        />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label>Bairro: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.bairro}
                                        onChange={this.onChangeBairro}
                                        />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Cidade: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.cidade}
                                        onChange={this.onChangeCidade}
                                        />
                            </div>
                            <div className="form-group col-md-1">
                                <label>UF: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.uf}
                                        onChange={this.onChangeUf}
                                        />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Criar Instituição" className="btn btn-primary" />
                        </div>
                    </form>
                    )}
            </div>
        )
    }
  }

  export default withAuthenticationRequired(CriaInstituicao, {
    onRedirecting: () => <Loading />,
})