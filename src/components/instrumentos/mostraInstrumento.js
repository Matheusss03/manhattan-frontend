import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class MostraInstrumento extends Component {
    constructor(props) {
        super(props)
        this.state = {
            instrumento: {}
        }
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/instrumento/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                instrumento: res.data
            })
        })
        .catch(err => {
            console.log('Erro para mostrar um instrumento ' + err)
        })
    }

    onDeleteClick (id) {
        axios.delete('https://backend-manhattan.herokuapp.com/instrumento/delete/'+id)
        .then(res => {
            this.props.history.push("/instrumento/todos")
        })
        .catch( err => {
            console.log('Erros ao deletar um instrumento '+err)
        })
    }

    render() {

        const instrumento = this.state.instrumento
        let InstrumentoItem = <div>
            <table className="table table-hover">
                <tbody>
                <tr>
                    <td>Máquina</td>
                    <td>{ instrumento.maquina }</td>
                </tr>
                <tr>
                    <td>Fabricante</td>
                    <td>{ instrumento.fabricante }</td>
                </tr>
                <tr>
                    <td>Modelo</td>
                    <td>{ instrumento.modelo }</td>
                </tr>
                <tr>
                    <td>Número de série</td>
                    <td>{ instrumento.serie }</td>
                </tr>
                <tr>
                    <td>CNEN</td>
                    <td>{ instrumento.cnen }</td>
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
                    <h1 className="display-4 text-center">Dados do instrumento</h1>
                    <hr /> <br />
                    </div>
                </div>
                <div>
                    { InstrumentoItem }
                </div>

                <div className="row">
                    <div className="col-md-6">
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,instrumento._id)}>Apagar instrumento</button><br />
                    </div>

                    <div className="col-md-6">
                    <Link to={`/instrumento/editar/${instrumento._id}`} className="btn btn-outline-info btn-lg btn-block">
                            Editar instrumento
                    </Link>
                    <br />
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default withAuthenticationRequired(MostraInstrumento, {
    onRedirecting: () => <Loading />,
})