import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from "../../assets/images/logo.svg";
import "./style.css";


const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');

    const history = useHistory();
    

    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path);
    }

    function teste(login, senha){
        if(login === validacaoLogin.loginCorreto && senha === validacaoLogin.senhaCorreta){
            //alert("Você está autorizado")
            routeChange(validacaoLogin.perfil)
        }else{
            alert("Você não está autorizado")
        }
    }

    
    return(
        <div id="container">
            <div className="box logo">
                <img src={logo} alt="FreeLaah" />
                <h1 className="slogan">Conectando quem busca com quem oferece!</h1>
            </div>

            <div className="login"> 
                <div className="login-area">
                    <h1 className="login-title">Fazer login</h1>
                    <input value={email} type="text" placeholder="E-mail" onChange={ text => {setEmail(text.target.value);} }></input>
                    <input value={senha} type="text" placeholder="senha" onChange={ text => {setSenha(text.target.value);} }></input>
                    <div className="login-forgot">
                        <ul>
                            <li>Lembrar-me</li>                                
                            <li>Esqueci minha senha</li>                  
                        </ul>
                    </div>
                    <div>
                        <button onClick={ evnt => teste(email, senha)}>Entrar</button>                        
                    </div>    
                </div>
                
                
                <div>
                    Não tem conta?
                    Cadatre-se
                    É de graça -ícone
                </div>
            </div>
        </div>
    )

}

export default Login;

let validacaoLogin = {
    "loginCorreto" : 'teste',
    "senhaCorreta" : '123',
    "perfil" : 'profissional'
};
