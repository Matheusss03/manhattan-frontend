import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

moment.locale('pt-br')

const DadoCalibrador = props => (
    <tr>
        <td>{props.dadoCalibrador.data}</td>
        <td>{props.dadoCalibrador.ajusteZero}</td>
        <td>{props.dadoCalibrador.altaTensao}</td>
        <td>{props.dadoCalibrador.bg}</td>
        <td>{props.dadoCalibrador.cheio}</td>
        <td>{props.dadoCalibrador.vazio}</td>
        <td>{props.dadoCalibrador.cobalto}</td>
        <td>{props.dadoCalibrador.bario}</td>
        <td>{props.dadoCalibrador.cesio}</td>
        <td>
            <Link to={"/curiometro/mostrar/"+props.dadoCalibrador._id}>Ver</Link>
        </td>
        <td>
            <Link to={"/curiometro/editar/"+props.dadoCalibrador._id}>Editar</Link>
        </td>
    </tr>
)

class ListaDiarioCuriometro extends Component {

    constructor(props) {
        super(props);
        this.state = {dado_calibrador: []};
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/curiometro/todos/')
            .then(response => {
                this.setState({ dado_calibrador: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    dadoCalibradorList() {
        return this.state.dado_calibrador.map(function(currentDiario, i) {
            return <DadoCalibrador dadoCalibrador={currentDiario} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Atividades Medidas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Data do Teste</th>
                            <th>Ajuste do Zero (mV)</th>
                            <th>Alta Tensão (V)</th>
                            <th>Radiação de Fundo (µCi)</th>
                            <th>Poço Cheio (µCi)</th>
                            <th>Poço Vazio (µCi)</th>
                            <th>Co-57 (µCi ou mCi)</th>
                            <th>Ba-133 (µCi)</th>
                            <th>Cs-137 (µCi)</th>
                            <th>Visualização</th>
                            <th>Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.dadoCalibradorList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withAuthenticationRequired(ListaDiarioCuriometro, {
    onRedirecting: () => <Loading />,
})