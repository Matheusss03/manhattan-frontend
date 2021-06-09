import React, { Component } from 'react'
import axios from 'axios'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class CriaFonteSelada extends Component {

    constructor(props) {
        super(props)
  
        this.onChangeRadionuclideo = this.onChangeRadionuclideo.bind(this)
        this.onChangeFabricante = this.onChangeFabricante.bind(this)
        this.onChangeSerie = this.onChangeSerie.bind(this)
        this.onChangeNumeroCertificado = this.onChangeNumeroCertificado.bind(this)
        this.onChangeMeiaVida = this.onChangeMeiaVida.bind(this)
        this.onChangeUnidadeMedida = this.onChangeUnidadeMedida.bind(this)
        this.onChangeDataCalibracao = this.onChangeDataCalibracao.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            radionuclideo: '',
            fabricante: '',
            serie: '',
            numeroCertificado: '',
            meiaVida: '',
            unidadeMedida: '',
            dataCalibracao: ''
        }
    }
  
    onChangeRadionuclideo(e) {
        this.setState({
            radionuclideo: e.target.value
        });
    }
  
    onChangeFabricante(e) {
        this.setState({
            fabricante: e.target.value
        });
    }
  
    onChangeSerie(e) {
        this.setState({
            serie: e.target.value
        });
    }
  
    onChangeNumeroCertificado(e) {
      this.setState({
          numeroCertificado: e.target.value
      });
    }

    onChangeMeiaVida(e) {
        this.setState({
            meiaVida: e.target.value
        });
      }
  
    onChangeUnidadeMedida(e) {
      this.setState({
          unidadeMedida: e.target.value
      });
    }

    onChangeDataCalibracao(e) {
        this.setState({
            dataCalibracao: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
  /*
        console.log(`Form submitted:`)
        console.log(`Ajuste do Zero: ${this.state.radionuclideo}`)
        console.log(`DataCalibracao Ajuste do Zero: ${this.state.fabricante}`)
        console.log(`Alta Tensão: ${this.state.serie}`)
        console.log(`DataCalibracao Alta Tensão: ${this.state.numeroCertificado}`)
        console.log(`unidadeMedida: ${this.state.unidadeMedida}`)
        console.log(`Césio: ${this.state.cesio}`)
        console.log(`Cobalto: ${this.state.cobalto}`)
        console.log(`DataCalibracao Repetibilidade: ${this.state.dataCalibracao}`)
  */
        const newFonte = {
            radionuclideo: this.state.radionuclideo,
            fabricante: this.state.fabricante,
            serie: this.state.serie,
            numeroCertificado: this.state.numeroCertificado,
            meiaVida: this.state.meiaVida,
            unidadeMedida: this.state.unidadeMedida,
            dataCalibracao: this.state.dataCalibracao,
        }
  
        axios.post('https://backend-manhattan.herokuapp.com/selada/add', newFonte)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            radionuclideo: '',
            fabricante: '',
            serie: '',
            numeroCertificado: '',
            meiaVida: '',
            unidadeMedida: '',
            dataCalibracao: ''
        })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Fonte Selada</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Nome do Fabricante: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.fabricante}
                                    onChange={this.onChangeFabricante}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Número de Série: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.serie}
                                    onChange={this.onChangeSerie}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Número do Certificado: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.numeroCertificado}
                                    onChange={this.onChangeNumeroCertificado}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        
                        <div className="form-group col-md-3">
                            <label>Radionuclídeo: </label>
                            <select value={this.state.radionuclideo} id="inputState" className="form-control" onChange={this.onChangeRadionuclideo}>
                                    <option value='Co-57' >Co-57</option>
                                    <option value='Ba-133' >Ba-133</option>
                                    <option value='Cs-137' >Cs-137</option>
                                    <option value='Na-22' >Na-22</option>
                                    <option value='Ge-68' >Ge-68</option>
                                </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Meia-Vida: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.meiaVida}
                                    onChange={this.onChangeMeiaVida}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Unidade de Medida: </label>
                            <select value={this.state.unidadeMedida} id="inputState" className="form-control" onChange={this.onChangeUnidadeMedida}>
                                    <option value='mCi' >mCi</option>
                                    <option value='µCi' >µCi</option>
                                    <option value='kBq' >kBq</option>
                                    <option value='MBq' >MBq</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Data de Cadastro: </label>
                            <input  type="date"
                                    className="form-control"
                                    value={this.state.dataCalibracao}
                                    onChange={this.onChangeDataCalibracao}
                                    />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Criar Fonte Selada" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
  }

  export default withAuthenticationRequired(CriaFonteSelada, {
    onRedirecting: () => <Loading />,
})