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
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            nome: '',
            cnpj: '',
            cnen: '',
            telefone: '',
            email: ''
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

    onSubmit(e) {
        e.preventDefault();

        const newInstituicao = {
            nome: this.state.nome,
            cnpj: this.state.cnpj,
            cnen: this.state.cnen,
            telefone: this.state.telefone,
            email: this.state.email
        }
  
        axios.post('https://backend-manhattan.herokuapp.com/instituicao/add', newInstituicao)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            nome: '',
            cnpj: '',
            cnen: '',
            telefone: '',
            email: ''
        })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Nova Instituição</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Nome: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.nome}
                                    onChange={this.onChangeNome}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>CNPJ: </label>
                            <input  type="text"
                                    className="form-control"
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
                                    value={this.state.cnen}
                                    onChange={this.onChangeCnen}
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
                        <div className="form-group col-md-3">
                            <label>Telefone: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.telefone}
                                    onChange={this.onChangeTelefone}
                                    />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Criar Instituição" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
  }

  export default withAuthenticationRequired(CriaInstituicao, {
    onRedirecting: () => <Loading />,
})