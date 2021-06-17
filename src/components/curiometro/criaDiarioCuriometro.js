import React, { Component } from 'react'
import axios from 'axios'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class CriaDiarioCuriometro extends Component {

    constructor(props) {
        super(props)
  
        this.onChangeAjusteZero = this.onChangeAjusteZero.bind(this)
        this.onChangeBg = this.onChangeBg.bind(this)
        this.onChangeAltaTensao = this.onChangeAltaTensao.bind(this)
        this.onChangeVazio = this.onChangeVazio.bind(this)
        this.onChangeCheio = this.onChangeCheio.bind(this)
        this.onChangeBario = this.onChangeBario.bind(this)
        this.onChangeCesio = this.onChangeCesio.bind(this)
        this.onChangeCobalto = this.onChangeCobalto.bind(this)
        this.onChangeMedidaCobalto = this.onChangeMedidaCobalto.bind(this)
        this.onChangeData = this.onChangeData.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            ajusteZero: '',
            bg: '',
            altaTensao: '',
            vazio: '',
            cheio: '',
            bario: '',
            cesio: '',
            cobalto: '',
            medidaCobalto: '',
            data: ''
        }
    }
  
    onChangeAjusteZero(e) {
        this.setState({
            ajusteZero: e.target.value
        });
    }
  
    onChangeBg(e) {
        this.setState({
            bg: e.target.value
        });
    }
  
    onChangeAltaTensao(e) {
        this.setState({
            altaTensao: e.target.value
        });
    }
  
    onChangeVazio(e) {
      this.setState({
          vazio: e.target.value
      });
    }

    onChangeCheio(e) {
        this.setState({
            cheio: e.target.value
        });
      }
  
    onChangeBario(e) {
      this.setState({
          bario: e.target.value
      });
    }

    onChangeCesio(e) {
        this.setState({
            cesio: e.target.value
        });
    }

    onChangeCobalto(e) {
        this.setState({
            cobalto: e.target.value
        });
    }

    onChangeMedidaCobalto(e) {
        this.setState({
            medidaCobalto: e.target.value
        });
    }

    onChangeData(e) {
        this.setState({
            data: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newDiario = {
            ajusteZero: this.state.ajusteZero,
            bg: this.state.bg,
            altaTensao: this.state.altaTensao,
            vazio: this.state.vazio,
            cheio: this.state.cheio,
            bario: this.state.bario,
            cesio: this.state.cesio,
            cobalto: this.state.cobalto,
            medidaCobalto: this.state.medidaCobalto,
            data: this.state.data,
        }
  
        axios.post('https://backend-manhattan.herokuapp.com/curiometro/add', newDiario)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            ajusteZero: '',
            bg: '',
            altaTensao: '',
            vazio: '',
            cheio: '',
            bario: '',
            cesio: '',
            cobalto: '',
            medidaCobalto: '',
            data: ''
        })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Nova Medida de Atividade</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Ajuste do Zero (mV): </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.ajusteZero}
                                    onChange={this.onChangeAjusteZero}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>BG (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.bg}
                                    onChange={this.onChangeBg}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Alta Tensão (V): </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.altaTensao}
                                    onChange={this.onChangeAltaTensao}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Contaminação Poço Vazio (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.vazio}
                                    onChange={this.onChangeVazio}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Contaminação Poço Cheio (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.cheio}
                                    onChange={this.onChangeCheio}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Bário (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.bario}
                                    onChange={this.onChangeBario}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Césio (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.cesio}
                                    onChange={this.onChangeCesio}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Cobalto: </label>
                            <input  type="number"
                                    className="form-control"
                                    value={this.state.cobalto}
                                    onChange={this.onChangeCobalto}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                                <label>Medida do Cobalto: </label>
                                <select value={this.state.medidaCobalto} id="inputState" className="form-control" onChange={this.onChangeMedidaCobalto}>
                                    <option selected>Selecione abaixo...</option>
                                    <option value='µCi' >µCi</option>
                                    <option value='mCi' >mCi</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Data: </label>
                            <input  type="date"
                                    className="form-control"
                                    value={this.state.data}
                                    onChange={this.onChangeData}
                                    />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Criar Medida de Atividade" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
  }

  export default withAuthenticationRequired(CriaDiarioCuriometro, {
    onRedirecting: () => <Loading />,
})