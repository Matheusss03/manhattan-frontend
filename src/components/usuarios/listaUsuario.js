import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

const Usuario = props => (
    <tr>
        <td>{props.usuario.nome}</td>
        <td>{props.usuario.tipo}</td>
        <td>{props.usuario.email}</td>
        <td>
            <Link to={"/usuario/mostrar/"+props.usuario._id}>Ver</Link>
        </td>
        <td>
            <Link to={"/usuario/editar/"+props.usuario._id}>Editar</Link>
        </td>
    </tr>
)

class ListaUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {usuarios: []};
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/usuario/todos')
            .then(response => {
                this.setState({ usuarios: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    userList() {
        return this.state.usuarios.map(function(currentUser, i){
            return <Usuario usuario={currentUser} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Lista de Usuários</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>E-mail</th>
                            <th>Visualização</th>
                            <th>Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withAuthenticationRequired(ListaUsuario, {
    onRedirecting: () => <Loading />,
})