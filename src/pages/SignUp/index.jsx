import React from 'react';

import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.svg";
import "./styles.css";

const SignUp = () => {    
  return(
      <div id="container">
          <div id="box" className="logo">
              <img src={logo} alt="FreeLaah" />
              <h1 className="slogan">Conectando quem busca com quem oferece!</h1>
          </div>

          <div className="cadastro"> 
              <div className="cadastro-area">
                  <h1 className="cadastro-title">Fazer cadastro</h1>
                  <input type="text" placeholder="Nome"></input>
                  <div className="cadastro-bloco">
                    <input type="text" placeholder="Cpf"></input>
                    <input type="number" placeholder="Idade"></input>
                  </div>   
                  <input type="text" placeholder="E-mail"></input>
                  <input type="text" placeholder="Senha"></input>
                  <div>
                      <button>Cadastrar</button>                        
                  </div>    
              </div>
              
              
              <div className="loginCad">
                  <Link to="/login">
                      Já tem conta? Realize o login! É de graça
                  </Link>
                  &nbsp; <FaHeart className="heart"/>
              </div>
          </div>
      </div>
  )

}

export default SignUp;

