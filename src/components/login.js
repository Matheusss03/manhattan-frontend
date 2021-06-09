import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { signIn } from "../redux/action-creator"

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { error } = useSelector((state) => state.authentication)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSenhaChange = (e) => {
        setSenha(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn({email, senha }, history))
    }

    return (
        <form onSubmit={handleSubmit}>

            <h3>Sistema Manhattan</h3>

            <div className="form-group">
                <label>E-mail</label>
                <input type="email" 
                className="form-control" 
                placeholder="Insira seu e-mail"
                value={email}
                onChange={handleEmailChange} />
            </div>

            <div className="form-group">
                <label>Senha</label>
                <input type="password" 
                className="form-control" 
                placeholder="Insira sua senha"
                value={senha}
                onChange={handleSenhaChange} />
            </div>

            {error !== null ? <div className="error">{error}</div> : null}

            <button type="submit" 
            className="btn btn-dark btn-lg btn-block"
            >Entrar</button>
            <p className="forgot-password text-right">
                Esqueceu a <Link to="/">senha?</Link>
            </p>
        </form>
    )
}

export default Login

/*
class Login extends Component {

    constructor(props) {
        super(props)
        
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeSenha = this.onChangeSenha.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: '',
            senha: ''
        }
    }

    onChangeSenha(e) {
        this.setState({
            senha: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    

    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            senha: this.state.senha
        }

        axios.post('https://backend-manhattan.herokuapp.com/auth/authenticate', user)
            .then(res => console.log(res.data))
            .catch(error => error.response)
  
        this.setState({
            senha: '',
            email: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <h3>Sistema Manhattan</h3>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Insira seu e-mail"
                    value={this.state.email}
                    onChange={this.onChangeEmail} />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Insira sua senha"
                    value={this.state.senha}
                    onChange={this.onChangeSenha} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
                <p className="forgot-password text-right">
                    Esqueceu a <Link to="/">senha?</Link>
                </p>
            </form>
        )
    }
}

export default memo(Login)
*/

/*
const Login = () => {

    const handleSubmit = values => {
        axios.post('https://backend-manhattan.herokuapp.com/auth/authenticate', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/')
                }
            })
    }

        return (
            <form onSubmit={handleSubmit}>

                <h3>Sistema Manhattan</h3>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="Insira seu e-mail" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Insira sua senha" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
                <p className="forgot-password text-right">
                    Esqueceu a <Link to="/">senha?</Link>
                </p>
            </form>
        );
    
}

export default Login
*/