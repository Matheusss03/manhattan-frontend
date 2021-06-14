import React, { Component } from 'react'
import axios from 'axios'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class EditaInstrumento extends Component {

    constructor(props) {
        super(props)

        this.state = {
            maquina: '',
            fabricante: '',
            modelo: '',
            serie: '',
            cnen: ''
        }
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/instrumento/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    maquina: response.data.maquina,
                    fabricante: response.data.fabricante,
                    modelo: response.data.modelo,
                    serie: response.data.serie,
                    cnen: response.data.cnen
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault()

        const newInstrumento = {
            maquina: this.state.maquina,
            fabricante: this.state.fabricante,
            modelo: this.state.modelo,
            serie: this.state.serie,
            cnen: this.state.cnen
        }

        axios.put('https://backend-manhattan.herokuapp.com/instrumento/update/'+this.props.match.params.id, newInstrumento)
            .then(res => {
                this.props.history.push('/instrumento/todos/')
            })
            .catch(err => {
                console.log("Erro ao atualizar instrumento!")
            })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Editar Instrumento</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-group col-md-4">
                            <label>Máquina: </label>
                            <select value={this.state.maquina} id="inputState" className="form-control" onChange={this.onChangeMaquina}>
                                <option name='maquina' value='Medidor de Atividade' >Medidor de Atividade</option>
                                <option name='maquina' value='Detector GM' >Detector GM</option>
                                <option name='maquina' value='Gama-Câmara' >Gama-Câmara</option>
                                <option name='maquina' value='Gama-Câmara SPECT' >Gama-Câmara SPECT</option>
                                <option name='maquina' value='Gama-Câmara SPECT/CT' >Gama-Câmara SPECT/CT</option>
                                <option name='maquina' value='PET/CT' >PET/CT</option>
                                <option name='maquina' value='Gama Probe' >Gama Probe</option>
                                <option name='maquina' value='Captador' >Captador</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-4">
                            <label>Fabricante: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='fabricante'
                                    value={this.state.fabricante}
                                    onChange={this.onChangeFabricante}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Modelo: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='modelo'
                                    value={this.state.modelo}
                                    onChange={this.onChangeModelo}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>CNEN: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='cnen'
                                    value={this.state.cnen}
                                    onChange={this.onChangeCnen}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Série: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='serie'
                                    value={this.state.serie}
                                    onChange={this.onChangeSerie}
                                    />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Atualizar Instrumento" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withAuthenticationRequired(EditaInstrumento, {
    onRedirecting: () => <Loading />,
})