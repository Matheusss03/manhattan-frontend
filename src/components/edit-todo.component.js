import React, { Component } from 'react'
import axios from 'axios'

export default class EditTodo extends Component {

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
            data: ''
        }
    }

    componentDidMount() {
        axios.get('https://backend-manhattan.herokuapp.com/curiometro'+this.props.match.params.id)
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
                    data: response.data.data,
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeData(e) {
        this.setState({
            data: e.target.value
        });
    }

    onSubmit(e) {
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
            data: this.state.data,
        };
        console.log(obj);
        axios.post('https://backend-manhattan.herokuapp.com/curiometro/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Atualizar Dado do Calibrador</h3>
                <form onSubmit={this.onSubmit}>
                <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Ajuste do Zero: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.ajusteZero}
                                    onChange={this.onChangeAjusteZero}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Radiação de Fundo: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bg}
                                    onChange={this.onChangeBg}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Alta Tensão: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.altaTensao}
                                    onChange={this.onChangeAltaTensao}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-3">
                            <label>Contaminação Poço Vazio: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.vazio}
                                    onChange={this.onChangeVazio}
                                    />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Contaminação Poço Cheio: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.text}
                                    onChange={this.onChangeCheio}
                                    />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="form-group col-md-2">
                            <label>Bário: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bario}
                                    onChange={this.onChangeBario}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Césio: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.cesio}
                                    onChange={this.onChangeCesio}
                                    />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Cobalto: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.cobalto}
                                    onChange={this.onChangeCobalto}
                                    />
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

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Atualizar Dado" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}