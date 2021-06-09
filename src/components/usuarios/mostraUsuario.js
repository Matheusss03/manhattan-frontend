import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class MostraUsuario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: {}
        }
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/usuario/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                usuario: res.data
            })
        })
        .catch(err => {
            console.log('Erro para mostrar um usuário ' + err)
        })
    }

    onDeleteClick (id) {
        axios.delete('https://backend-manhattan.herokuapp.com/usuario/delete/'+id)
        .then(res => {
            this.props.history.push("/usuario/todos")
        })
        .catch( err => {
            console.log('Erros ao deletar um usuário '+err)
        })
    }

    render() {

        const usuario = this.state.usuario
        let UsuarioItem = <div>
            <table className="table table-hover">
                <tbody>
                <tr>
                    <td>Nome</td>
                    <td>{ usuario.nome }</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{ usuario.email }</td>
                </tr>
                <tr>
                    <td>CNEN</td>
                    <td>{ usuario.cnen }</td>
                </tr>
                <tr>
                    <td>Conselho</td>
                    <td>{ usuario.conselho }</td>
                </tr>
                <tr>
                    <td>Celular</td>
                    <td>{ usuario.celular }</td>
                </tr>
                <tr>
                    <td>Tipo</td>
                    <td>{ usuario.tipo }</td>
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
                    <h1 className="display-4 text-center">Dados do usuário</h1>
                    <hr /> <br />
                    </div>
                </div>
                <div>
                    { UsuarioItem }
                </div>

                <div className="row">
                    <div className="col-md-6">
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,usuario._id)}>Apagar usuário</button><br />
                    </div>

                    <div className="col-md-6">
                    <Link to={`/usuario/editar/${usuario._id}`} className="btn btn-outline-info btn-lg btn-block">
                            Editar usuário
                    </Link>
                    <br />
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default withAuthenticationRequired(MostraUsuario, {
    onRedirecting: () => <Loading />,
})