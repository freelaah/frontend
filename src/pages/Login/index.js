import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaArrowLeft, FaHeart } from 'react-icons/fa';
import logo from "../../assets/images/logo.svg";
import "./style.css";

import api from '../../services/api';

const Login = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword ] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);

    const history = useHistory();
    
    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path);
    }

    async function loginAutorization(login, password){
        let isAutorization = false;
        let json = null;

        try {
            json = await api.post("/users/login", {login, password});

            if(json.data.authorization == true && json.data.token !== null){                   
                //salva token
                localStorage.setItem('token', json.data.token);
                localStorage.setItem('tipo', json.data.type);
                console.log(">>> tipo: " + json.data.type)

                //TODO: arrumar e passar por redux
                localStorage.setItem('id_user', json.data.id_user);
                isAutorization = true;      
            }

         }catch(e){
             console.log("erro " + e);
         }
         
         if(isAutorization) {
             //cliente ou profissional
            history.push(json.data.type);
         } else {
            setInvalidPassword(true);
         }

    }

    
    return(
        <div id="container">
            <div id="box" className="logo">
                <img src={logo} alt="FreeLaah" />
                <h1 className="slogan">Conectando quem busca com quem oferece!</h1>
            </div>

            <div className="login"> 
                <div className="seta">
                    <Link to="/">
                        <FaArrowLeft />
                    </Link>
                </div>
                <div className="login-area">
                    <h1 className="login-title">Fazer login</h1>
                    <input className="input-teste" value={login} type="text" placeholder="E-mail" onChange={ text => {setLogin(text.target.value);} }></input>
                    <input className="input-teste" value={password} type="password" placeholder="Senha" onChange={ text => {setPassword(text.target.value);} }></input>
                    <div className="login-forgot">
                        <ul>
                            <li>Lembrar-me</li>                                
                            <li>Esqueci minha senha</li>                  
                        </ul>
                    </div>
                    <div>

                    {
                        (invalidPassword == true) &&  <div className='invalidPassword'>Senha ou usuário não cadastrado.</div>
                    }
                    
                    </div>

                    <div>
                        <button onClick={ evnt => loginAutorization(login, password)}>Entrar</button>                        
                    </div>
                    
                        
                </div>
                
                
                <div className="loginCad">
                    <Link to="/cadastro">
                        Não tem conta? Cadastre-se! É de graça
                    </Link>
                    &nbsp; <FaHeart className="heart"/>
                </div>
            </div>
        </div>
    )
}

export default Login;
