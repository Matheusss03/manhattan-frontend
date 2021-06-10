import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

const Instituicao = props => (
    <tr>
        <td>{props.instituicao.nome}</td>
        <td>{props.instituicao.email}</td>
        <td>
            <Link to={"/instituicao/mostrar/"+props.instituicao._id}>Ver</Link>
        </td>
        <td>
            <Link to={"/instituicao/editar/"+props.instituicao._id}>Editar</Link>
        </td>
    </tr>
)

class ListaInstituicao extends Component {

    constructor(props) {
        super(props);
        this.state = {instituicoes: []};
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/instituicao/todos')
            .then(response => {
                this.setState({ instituicoes: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    instituicaoList() {
        return this.state.instituicoes.map(function(currentInstituicao, i){
            return <Instituicao instituicao={currentInstituicao} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Lista de Instituições</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Visualização</th>
                            <th>Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.instituicaoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withAuthenticationRequired(ListaInstituicao, {
    onRedirecting: () => <Loading />,
})