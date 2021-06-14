import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

const Instrumento = props => (
    <tr>
        <td>{props.instrumento.maquina}</td>
        <td>{props.instrumento.modelo}</td>
        <td>
            <Link to={"/instrumento/mostrar/"+props.instrumento._id}>Ver</Link>
        </td>
        <td>
            <Link to={"/instrumento/editar/"+props.instrumento._id}>Editar</Link>
        </td>
    </tr>
)

class ListaInstrumento extends Component {

    constructor(props) {
        super(props);
        this.state = {instrumentos: []};
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/instrumento/todos')
            .then(response => {
                this.setState({ instrumentos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    instrumentoList() {
        return this.state.instrumentos.map(function(currentInstrumento, i){
            return <Instrumento instrumento={currentInstrumento} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Lista de Instrumentos</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Tipo de Máquina</th>
                            <th>Modelo</th>
                            <th>Visualização</th>
                            <th>Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.instrumentoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withAuthenticationRequired(ListaInstrumento, {
    onRedirecting: () => <Loading />,
})