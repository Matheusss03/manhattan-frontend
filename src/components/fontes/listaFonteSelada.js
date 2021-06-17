import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'


const FonteSelada = props => (
    <tr>
        <td>{props.selada.fabricante}</td>
        <td>{props.selada.radionuclideo}</td>
        <td>
            <Link to={"/selada/mostrar/"+props.selada._id}>Ver</Link>
        </td>
        <td>
            <Link to={"/selada/editar/"+props.selada._id}>Editar</Link>
        </td>
    </tr>
)

class ListaFonteSelada extends Component {

    constructor(props) {
        super(props);
        this.state = {fonte_selada: []};
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/selada/todos/')
            .then(response => {
                this.setState({ fonte_selada: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    fonteSelada() {
        return this.state.fonte_selada.map(function(currentDiario, i) {
            return <FonteSelada selada={currentDiario} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Fontes Seladas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Nome do Fabricante</th>
                            <th>Radionuclídeo</th>
                            <th>Visualização</th>
                            <th>Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.fonteSelada() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withAuthenticationRequired(ListaFonteSelada, {
    onRedirecting: () => <Loading />,
})