import React, { Component } from 'react'
import axios from 'axios'
import { cnenMask } from '../../utils/masks'

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

    onChangeMaquina(e) {
        this.setState({
            maquina: e.target.value
        });
    }
  
    onChangeFabricante(e) {
        this.setState({
            fabricante: e.target.value
        });
    }
  
    onChangeModelo(e) {
        this.setState({
            modelo: e.target.value
        });
    }
  
    onChangeSerie(e) {
      this.setState({
          serie: e.target.value
      });
    }

    onChangeCnen(e) {
        this.setState({
            cnen: cnenMask(e.target.value)
        });
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
                        <div className="form-group col-md-3">
                            <label>Máquina: </label>
                            <select value={this.state.maquina} id="inputState" className="form-control" onChange={this.onChangeMaquina}>
                                <option selected>Selecione abaixo...</option>
                                <option value='Medidor de Atividade' >Medidor de Atividade</option>
                                <option value='Detector GM' >Detector GM</option>
                                <option value='Gama-Câmara' >Gama-Câmara</option>
                                <option value='Gama-Câmara SPECT' >Gama-Câmara SPECT</option>
                                <option value='Gama-Câmara SPECT/CT' >Gama-Câmara SPECT/CT</option>
                                <option value='PET/CT' >PET/CT</option>
                                <option value='Gama Probe' >Gama Probe</option>
                                <option value='Captador' >Captador</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Fabricante: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='fabricante'
                                    value={this.state.fabricante}
                                    onChange={this.onChangeFabricante}
                                    />
                        </div>
                        <div className="form-group col-md-2">
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
                        <div className="form-group col-md-2">
                            <label>CNEN: </label>
                            <input  type="text"
                                    className="form-control"
                                    name='cnen'
                                    value={this.state.cnen}
                                    onChange={this.onChangeCnen}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Número de série: </label>
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