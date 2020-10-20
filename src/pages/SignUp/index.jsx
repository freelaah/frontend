import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaHeart, FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';


import logo from "../../assets/images/logo.svg";
import "./styles.css";

const SignUp = () => {    

  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [idade, setIdade] = useState('');
  const [perfil, setPerfil] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [instrucaoSenha, setInstrucaoSenha] = useState('');
  const history = useHistory();



  const routeChange = (name) => {
    let path = `/`.concat(name);
    history.pushState(path); //Joga o usuario para esse path
  }

  
  async function sendInput(e){
    
    e.preventDefault(); 
    console.log(">>> senInput");
    const data = {login: email, senha: senha, nome: nome, tipo: perfil, cpf: cpf };
    console.log(">>>", data);

    try {
      
      const response = await api.post("/users/register", data);

   }catch(error){
       console.log("erro " + error);
   }

   console.log("fim >>")

  }

  function changeType(value){
    setPerfil(value);
  }

  return(
      <div id="container">
          <div id="box" className="logo">
            <img src={logo} alt="FreeLaah" />
            <h1 className="slogan">Conectando quem busca com quem oferece!</h1> 
          </div>

          <div className="cadastro"> 
              <div className="seta">
                <Link to="/">
                  <FaArrowLeft />
                </Link>
              </div>
              <div className="cadastro-area">
                  <h1 className="cadastro-title">Fazer cadastro</h1>
                  <input type="text" placeholder="Nome" value={nome} onChange={(text) => setNome(text.target.value)}></input>
                  <div className="cadastro-bloco">
                    <input type="text" placeholder="Cpf" value={cpf} onChange={(text) => setCPF(text.target.value)}></input>
                    <input type="number" placeholder="Idade" value={idade} onChange={(text) => setIdade(text.target.value)}></input>
                  </div>   
                  <select defaultValue="" id="perfil" onChange={(evt) => changeType(evt.target.value) }>
                    <option value="" disabled hidden>Selecione um Perfil</option>
                    <option value="prestar">Prestar Serviço</option>
                    <option value="buscar">Buscar Serviço</option>
                  </select>
                  <input type="text" placeholder="E-mail" value={email} onChange={(text) => setEmail(text.target.value)}></input>
                  <input type="text" placeholder="Senha" value={senha} onChange={(text) => setSenha(text.target.value)}></input>
                  <div>
                      <button onClick={(e) => sendInput(e) }  >Cadastrar</button>                        
                  </div>
                  <div>
                      {instrucaoSenha}
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

