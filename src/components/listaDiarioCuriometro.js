import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

moment.locale('pt-br')

const MedidorDeAtividade = props => (
    <tr>
        <td>{props.curiometro.data}</td>
        <td>{props.curiometro.ajusteZero}</td>
        <td>{props.curiometro.altaTensao}</td>
        <td>{props.curiometro.bg}</td>
        <td>{props.curiometro.cheio}</td>
        <td>{props.curiometro.vazio}</td>
        <td>{props.curiometro.cobalto}</td>
        <td>{props.curiometro.bario}</td>
        <td>{props.curiometro.cesio}</td>
        <td>
            <Link to={"/update/"+props.curiometro._id}>Editar</Link>
        </td>
    </tr>
)

export default class DiariosList extends Component {

    constructor(props) {
        super(props);
        this.state = {diarios: []};
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/curiometro/todos')
            .then(response => {
                this.setState({ diarios: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    curiometroList() {
        return this.state.diarios.map(function(currentDiario, i){
            return <MedidorDeAtividade curiometro={currentDiario} key={i} />;
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
                        </tr>
                    </thead>
                    <tbody>
                        { this.curiometroList() }
                    </tbody>
                </table>
            </div>
        )
    }
}