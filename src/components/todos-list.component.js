import React, { Component } from 'react';
import axios from 'axios';

const Usuario = props => (
    <tr>
        <td>{props.usuario.nome}</td>
        <td>{props.usuario.cpf}</td>
        <td>{props.usuario.tipo}</td>
        <td>{props.usuario.email}</td>
    </tr>
)

export default class UsuariosList extends Component {

    constructor(props) {
        super(props);
        this.state = {usuarios: []};
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/auth/')
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
                            <th>CPF</th>
                            <th>Tipo</th>
                            <th>E-mail</th>
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