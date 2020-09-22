import React from 'react';

import logo from "../../assets/images/logo.svg";
import "./style.css";


const Login = () => {

    return(
        <div id="container">
            <div className="box logo">
                <img src={logo} alt="FreeLaah" />
                <h1 className="slogan">Conectando quem busca com quem oferece!</h1>
            </div>

            <div className="login"> 
                <div className="login-area">
                    <h1 className="login-title">Fazer login</h1>
                    <input type="text" placeholder="E-mail"></input>
                    <input type="text" placeholder="Senha"></input>
                    <div className="login-forgot">
                        <ul>
                            <li>Lembrar-me</li>                                
                            <li>Esqueci minha senha</li>                  
                        </ul>
                    </div>
                    <div>
                        <button>Entrar</button>
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