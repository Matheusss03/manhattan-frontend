import React, { Component } from 'react'
import axios from 'axios'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class CriaFonteNaoSelada extends Component {

    constructor(props) {
        super(props)
  
        this.onChangeRadionuclideo = this.onChangeRadionuclideo.bind(this)
        this.onChangeMeiaVida = this.onChangeMeiaVida.bind(this)
        this.onChangeUnidadeTempo = this.onChangeUnidadeTempo.bind(this)
        this.onChangeAtividade = this.onChangeAtividade.bind(this)
        this.onChangeUnidadeMedida = this.onChangeUnidadeMedida.bind(this)
        this.onChangeDataCalibracao = this.onChangeDataCalibracao.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            radionuclideo: '',
            meiaVida: '',
            unidadeTempo: '',
            unidadeMedida: '',
            atividade: '',
            dataCalibracao: ''
        }
    }
  
    onChangeRadionuclideo(e) {
        this.setState({
            radionuclideo: e.target.value
        });
    }

    onChangeMeiaVida(e) {
        this.setState({
            meiaVida: e.target.value
        });
    }

    onChangeUnidadeTempo(e) {
        this.setState({
            unidadeTempo: e.target.value
        });
    }

    onChangeAtividade(e) {
        this.setState({
            atividade: e.target.value
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

        const newFonte = {
            radionuclideo: this.state.radionuclideo,
            meiaVida: this.state.meiaVida,
            unidadeTempo: this.state.unidadeTempo,
            atividade: this.state.atividade,
            unidadeMedida: this.state.unidadeMedida,
            dataCalibracao: this.state.dataCalibracao,
        }
  
        axios.post('https://backend-manhattan.herokuapp.com/naoSelada/add', newFonte)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            radionuclideo: '',
            meiaVida: '',
            unidadeTempo: '',
            atividade: '',
            unidadeMedida: '',
            dataCalibracao: ''
        })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Fonte Não Selada</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Radionuclídeo: </label>
                            <select value={this.state.radionuclideo} id="inputState" className="form-control" onChange={this.onChangeRadionuclideo}>
                                    <option value='Tc-99m' >Tc-99m</option>
                                    <option value='I-131' >I-131</option>
                                    <option value='Ga-67' >Ga-67</option>
                                    <option value='F-18' >F-18</option>
                                    <option value='Ga-68' >Ga-68</option>
                                </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label>Atividade Calibrada: </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.atividade}
                                    onChange={this.onChangeAtividade}
                                    />
                        </div>
                        <div className="form-group col-md-2">
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
                            <label>Meia-Vida: </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.meiaVida}
                                    onChange={this.onChangeMeiaVida}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Unidade de Tempo: </label>
                            <select value={this.state.unidadeTempo} id="inputState" className="form-control" onChange={this.onChangeUnidadeTempo}>
                                    <option value='dias' >dias</option>
                                    <option value='anos' >anos</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Data de Calibração: </label>
                            <input  type="date"
                                    className="form-control"
                                    value={this.state.dataCalibracao}
                                    onChange={this.onChangeDataCalibracao}
                                    />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Criar Fonte Não Selada" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
  }

  export default withAuthenticationRequired(CriaFonteNaoSelada, {
    onRedirecting: () => <Loading />,
})