import React, { Component } from 'react'
import axios from 'axios'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class CriaInstrumento extends Component {

    constructor(props) {
        super(props)
  
        this.onChangeMaquina = this.onChangeMaquina.bind(this)
        this.onChangeFabricante = this.onChangeFabricante.bind(this)
        this.onChangeModelo = this.onChangeModelo.bind(this)
        this.onChangeSerie = this.onChangeSerie.bind(this)
        this.onChangeCnen = this.onChangeCnen.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            maquina: '',
            fabricante: '',
            modelo: '',
            serie: '',
            cnen: ''
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
  
        const newInstrumento = {
            maquina: this.state.maquina,
            fabricante: this.state.fabricante,
            modelo: this.state.modelo,
            serie: this.state.serie,
            cnen: this.state.cnen
        }
  
        axios.post('https://backend-manhattan.herokuapp.com/instrumento/add', newInstrumento)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            maquina: '',
            fabricante: '',
            modelo: '',
            serie: '',
            cnen: ''
        })
    }

    render() {
        return(
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Novo Instrumento</h3>
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
                        <input type="submit" value="Criar Instrumento" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}

export default withAuthenticationRequired(CriaInstrumento, {
    onRedirecting: () => <Loading />,
})