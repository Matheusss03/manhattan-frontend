import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class MostraDiarioCuriometro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diario: {}
        }
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/curiometro/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                diario: res.data
            })
        })
        .catch(err => {
            console.log('Erro para mostrar um diário ' + err)
        })
    }

    onDeleteClick (id) {
        axios.delete('https://backend-manhattan.herokuapp.com/curiometro/delete/'+id)
        .then(res => {
            this.props.history.push("/curiometro/todos")
        })
        .catch( err => {
            console.log('Erros ao deletar um diário '+err)
        })
    }

    render() {

        const diario = this.state.diario
        let DiarioItem = <div>
            <table className="table table-hover">
                <tbody>
                <tr>
                    <td>Ajuste do Zero (mV)</td>
                    <td>{ diario.ajusteZero }</td>
                </tr>
                <tr>
                    <td>Alta Tensão (V)</td>
                    <td>{ diario.altaTensao }</td>
                </tr>
                <tr>
                    <td>BG (µCi)</td>
                    <td>{ diario.bg }</td>
                </tr>
                <tr>
                    <td>Contaminação do Poço Cheio (µCi)</td>
                    <td>{ diario.cheio }</td>
                </tr>
                <tr>
                    <td>Contaminação do Poço Vazio (µCi)</td>
                    <td>{ diario.vazio }</td>
                </tr>
                <tr>
                    <td>Bário (µCi)</td>
                    <td>{ diario.bario }</td>
                </tr>
                <tr>
                    <td>Césio (µCi)</td>
                    <td>{ diario.cesio }</td>
                </tr>
                <tr>
                    <td>Cobalto</td>
                    <td>{ diario.cobalto }</td>
                </tr>
                <tr>
                    <td>Medida do Cobalto</td>
                    <td>{ diario.medidaCobalto }</td>
                </tr>
                <tr>
                    <td>Data da Coleta</td>
                    <td>{ diario.data }</td>
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
                    <h1 className="display-4 text-center">Dados do medidor de atividade</h1>
                    <hr /> <br />
                    </div>
                </div>
                <div>
                    { DiarioItem }
                </div>

                <div className="row">
                    <div className="col-md-6">
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,diario._id)}>Apagar dado</button><br />
                    </div>

                    <div className="col-md-6">
                    <Link to={`/curiometro/editar/${diario._id}`} className="btn btn-outline-info btn-lg btn-block">
                            Editar dado
                    </Link>
                    <br />
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default withAuthenticationRequired(MostraDiarioCuriometro, {
    onRedirecting: () => <Loading />,
})