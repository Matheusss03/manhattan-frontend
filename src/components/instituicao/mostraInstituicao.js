import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class MostraInstituicao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            instituicao: {}
        }
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/instituicao/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                instituicao: res.data
            })
        })
        .catch(err => {
            console.log('Erro para mostrar uma instituição ' + err)
        })
    }

    onDeleteClick (id) {
        axios.delete('https://backend-manhattan.herokuapp.com/instituicao/delete/'+id)
        .then(res => {
            this.props.history.push("/instituicao/todos")
        })
        .catch( err => {
            console.log('Erros ao deletar uma instituição '+err)
        })
    }

    render() {

        const instituicao = this.state.instituicao
        let InstituicaoItem = <div>
            <table className="table table-hover">
                <tbody>
                <tr>
                    <td>Nome Fantasia</td>
                    <td>{ instituicao.nome }</td>
                </tr>
                <tr>
                    <td>Razão Social</td>
                    <td>{ instituicao.razao }</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{ instituicao.email }</td>
                </tr>
                <tr>
                    <td>CNEN</td>
                    <td>{ instituicao.cnen }</td>
                </tr>
                <tr>
                    <td>CNPJ</td>
                    <td>{ instituicao.cnpj }</td>
                </tr>
                <tr>
                    <td>Telefone</td>
                    <td>{ instituicao.telefone }</td>
                </tr>
                <tr>
                    <td>Grupo</td>
                    <td>{ instituicao.grupo }</td>
                </tr>
                <tr>
                    <td>CEP</td>
                    <td>{ instituicao.cep }</td>
                </tr>
                <tr>
                    <td>Logradouro</td>
                    <td>{ instituicao.logradouro }</td>
                </tr>
                <tr>
                    <td>Complemento</td>
                    <td>{ instituicao.complemento }</td>
                </tr>
                <tr>
                    <td>Bairro</td>
                    <td>{ instituicao.bairro }</td>
                </tr>
                <tr>
                    <td>Cidade</td>
                    <td>{ instituicao.cidade }</td>
                </tr>
                <tr>
                    <td>UF</td>
                    <td>{ instituicao.uf }</td>
                </tr>
                </tbody>
            </table>
            </div>

        return (
            <div className="ShowBookDetails">
                <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                    <br /> <br />
                    </div>
                    <br />
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Dados da instituição</h1>
                    <hr /> <br />
                    </div>
                </div>
                <div>
                    { InstituicaoItem }
                </div>

                <div className="row">
                    <div className="col-md-6">
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,instituicao._id)}>Apagar instituição</button><br />
                    </div>

                    <div className="col-md-6">
                    <Link to={`/instituicao/editar/${instituicao._id}`} className="btn btn-outline-info btn-lg btn-block">
                            Editar instituição
                    </Link>
                    <br />
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default withAuthenticationRequired(MostraInstituicao, {
    onRedirecting: () => <Loading />,
})