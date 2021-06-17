import React, { Component } from 'react'
import axios from 'axios'

import { withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from '../../components'

class EditaDiarioCuriometro extends Component {

    constructor(props) {
        super(props)
  
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

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/curiometro/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    ajusteZero: response.data.ajusteZero,
                    bg: response.data.bg,
                    altaTensao: response.data.altaTensao,
                    vazio: response.data.vazio,
                    cheio: response.data.cheio,
                    bario: response.data.bario,
                    cesio: response.data.cesio,
                    cobalto: response.data.cobalto,
                    medidaCobalto: response.data.medidaCobalto,
                    data: response.data.data,
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
        e.preventDefault();
        const obj = {
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
        };
        console.log(obj);
        axios.put('https://backend-manhattan.herokuapp.com/curiometro/update/'+this.props.match.params.id, obj)
            .then(res => {
                this.props.history.push('/curiometro/todos/')
            })
            .catch(err => {
                console.log("Erro ao atualizar dado do curiômetro!")
            })
    }

    render() {
        return (
            <div>
                <h3>Editar Dado do Calibrador</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Ajuste do Zero (mV): </label>
                            <input  type="number"
                                    className="form-control"
                                    name='ajusteZero'
                                    value={this.state.ajusteZero}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>BG (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    name='bg'
                                    value={this.state.bg}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Alta Tensão (V): </label>
                            <input  type="number"
                                    className="form-control"
                                    name='altaTensao'
                                    value={this.state.altaTensao}
                                    onChange={this.onChange}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Contaminação Poço Vazio (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    name='vazio'
                                    value={this.state.vazio}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Contaminação Poço Cheio (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    name='cheio'
                                    value={this.state.cheio}
                                    onChange={this.onChange}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Bário (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    name='bario'
                                    value={this.state.bario}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Césio (µCi): </label>
                            <input  type="number"
                                    className="form-control"
                                    name='césio'
                                    value={this.state.cesio}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Cobalto: </label>
                            <input  type="number"
                                    className="form-control"
                                    name='cobalto'
                                    value={this.state.cobalto}
                                    onChange={this.onChange}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                                <label>Medida do Cobalto: </label>
                                <select name='medidaCobalto' value={this.state.medidaCobalto} id="inputState" className="form-control" onChange={this.onChange}>
                                    <option name='medidaCobalto' selected>Selecione abaixo...</option>
                                    <option name='medidaCobalto' value='µCi' >µCi</option>
                                    <option name='medidaCobalto' value='mCi' >mCi</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Data: </label>
                            <input  type="date"
                                    className="form-control"
                                    name='data'
                                    value={this.state.data}
                                    onChange={this.onChange}
                                    />
                        </div>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Salvar Modificações" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withAuthenticationRequired(EditaDiarioCuriometro, {
    onRedirecting: () => <Loading />,
})