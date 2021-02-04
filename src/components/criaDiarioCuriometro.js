import React, { Component } from 'react'
import axios from 'axios'

export default class CreateTodo extends Component {

    constructor(props) {
        super(props)
  
        this.onChangeAjusteZero = this.onChangeAjusteZero.bind(this)
        this.onChangeDataAjusteZero = this.onChangeDataAjusteZero.bind(this)
        this.onChangeAltaTensao = this.onChangeAltaTensao.bind(this)
        this.onChangeDataAltaTensao = this.onChangeDataAltaTensao.bind(this)
        this.onChangeBario = this.onChangeBario.bind(this)
        this.onChangeCesio = this.onChangeCesio.bind(this)
        this.onChangeCobalto = this.onChangeCobalto.bind(this)
        this.onChangeDataRepetibilidade = this.onChangeDataRepetibilidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            ajusteZero: '',
            dataAjusteZero: '',
            altaTensao: '',
            dataAltaTensao: '',
            bario: '',
            cesio: '',
            cobalto: '',
            dataRepetibilidade: ''
        }
    }
  
    onChangeAjusteZero(e) {
        this.setState({
            ajusteZero: e.target.value
        });
    }
  
    onChangeDataAjusteZero(e) {
        this.setState({
            dataAjusteZero: e.target.value
        });
    }
  
    onChangeAltaTensao(e) {
        this.setState({
            altaTensao: e.target.value
        });
    }
  
    onChangeDataAltaTensao(e) {
      this.setState({
          dataAltaTensao: e.target.value
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

    onChangeDataRepetibilidade(e) {
        this.setState({
            dataRepetibilidade: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
  
        console.log(`Form submitted:`)
        console.log(`Ajuste do Zero: ${this.state.ajusteZero}`)
        console.log(`Data Ajuste do Zero: ${this.state.dataAjusteZero}`)
        console.log(`Alta Tensão: ${this.state.altaTensao}`)
        console.log(`Data Alta Tensão: ${this.state.dataAltaTensao}`)
        console.log(`Bario: ${this.state.bario}`)
        console.log(`Césio: ${this.state.cesio}`)
        console.log(`Cobalto: ${this.state.cobalto}`)
        console.log(`Data Repetibilidade: ${this.state.dataRepetibilidade}`)
  
        const newDiario = {
            ajusteZero: this.state.ajusteZero,
            dataAjusteZero: this.state.dataAjusteZero,
            altaTensao: this.state.altaTensao,
            dataAltaTensao: this.state.dataAltaTensao,
            bario: this.state.bario,
            cesio: this.state.cesio,
            cobalto: this.state.cobalto,
            dataRepetibilidade: this.state.dataRepetibilidade,
        }
  
        axios.post('http://localhost:3000/curiometro/add', newDiario)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            ajusteZero: '',
            dataAjusteZero: '',
            altaTensao: '',
            dataAltaTensao: '',
            bario: '',
            cesio: '',
            cobalto: '',
            dataRepetibilidade: ''
        })
    }
  
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Cadastrar Nova Medida de Atividade</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Ajuste do Zero: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ajusteZero}
                                onChange={this.onChangeAjusteZero}
                                />
                    </div>
                    <div className="form-group">
                        <label>Data do Ajuste do Zero: </label>
                        <input  type="date"
                                className="form-control"
                                value={this.state.dataAjusteZero}
                                onChange={this.onChangeDataAjusteZero}
                                />
                    </div>
                    <div className="form-group">
                        <label>Alta Tensão: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.altaTensao}
                                onChange={this.onChangeAltaTensao}
                                />
                    </div>
                    <div className="form-group">
                        <label>Data da Alta Tensão: </label>
                        <input  type="date"
                                className="form-control"
                                value={this.state.bario}
                                onChange={this.onChangeBario}
                                />
                    </div>
                    <div className="form-group">
                        <label>Bário: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.bario}
                                onChange={this.onChangeBario}
                                />
                    </div>
                    <div className="form-group">
                        <label>Césio: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.cesio}
                                onChange={this.onChangeCesio}
                                />
                    </div>
                    <div className="form-group">
                        <label>Cobalto: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.cobalto}
                                onChange={this.onChangeCobalto}
                                />
                    </div>
                    <div className="form-group">
                        <label>Data Repetibilidade: </label>
                        <input  type="date"
                                className="form-control"
                                value={this.state.dataRepetibilidade}
                                onChange={this.onChangeDataRepetibilidade}
                                />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Criar Medidor de Atividade" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
  }