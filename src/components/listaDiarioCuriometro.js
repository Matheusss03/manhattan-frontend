import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

moment.locale('pt-br')

const MedidorDeAtividade = props => (
    <tr>
        <td>{props.curiometro.ajusteZero}</td>
        <td>{moment(props.curiometro.dataAjusteZero).locale('pt-br').format('l')}</td>
        <td>{props.curiometro.altaTensao}</td>
        <td>{moment(props.curiometro.dataAltaTensao).format('l')}</td>
        <td>{props.curiometro.cobalto}</td>
        <td>{props.curiometro.bario}</td>
        <td>{props.curiometro.cesio}</td>
        <td>{moment(props.curiometro.dataRepetibilidade).format('l')}</td>
    </tr>
)

export default class diariosList extends Component {

    constructor(props) {
        super(props);
        this.state = {diarios: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/curiometro/todos/')
            .then(response => {
                this.setState({ diarios: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    curiometroList() {
        return this.state.diarios.map(function(currentUser, i){
            return <MedidorDeAtividade curiometro={currentUser} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Atividades Medidas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Ajuste do Zero</th>
                            <th>Data do Ajuste do Zero</th>
                            <th>Alta Tensão</th>
                            <th>Data da Alta Tensão</th>
                            <th>Co-57</th>
                            <th>Ba-133</th>
                            <th>Cs-137</th>
                            <th>Data da Repetibilidade</th>
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