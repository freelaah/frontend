import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import imgWhatsapp from './../../assets/images/whatsapp.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const ProfessionalScheduleCard = (props ) => {
  
  const callback = props.cb; 

  let txtMensagem = "Ol%C3%A1%20voc%C3%AA%20fez%20uma%20reserva%20do%20meu%20servi%C3%A7o%20no%20Freelaah%2C%20quero%20entrar%20em%20contato%20para...";

  function formatData(data){
    //2020-12-01
    let arrData = data.split("-");
    return `${arrData[2]}/${arrData[1]}/${arrData[0]}`;
  }


  return (
  <>
  { (props.schedule != undefined) && (
   
      <article className="teacher-item">
            <h1>Cliente:</h1>
            <hr></hr>
            <header>
                <img src={`http://localhost:5000/files/${props.schedule.cliente.img_profile}`} alt="nome cliente"/>
                <div>
              <strong>{props.schedule.cliente.nome}</strong>
                </div>

                  <div className="contactButton">
                  <a href={`https://wa.me/${props.schedule.cliente.telefone}?text=${txtMensagem}`} target="blank">
                        <img src={imgWhatsapp} />
                        Entrar em contato
                    </a>
                  </div>

            </header>
            <hr></hr>
            <header>
                <div>
                  
                    <strong>Serviço contratado:</strong><p>{props.schedule.servico.descricao}</p>
                </div>
            </header>
            <hr></hr>

            {/* <p align="center">fgffgdfgdfgdfgdfsfffffffffffffffffffffffffffffffsdfdsfsdfsdf</p>

            <div className="wrapper-img">
              <img src={imgMore} alt="sobre"/>
            </div> */}

            <footer>
                <p>
                    Preço/dia
                <strong>R$ {props.schedule.servico.preco}</strong>
                </p>
                <div className="inputBlock">
                  <label htmlFor="dataServico">Data do serviço:</label>
                  {/* <input id="dataServico" name="dataServico" type="date" className="date" /> */}
                  <h1>{formatData(props.schedule.dia_servico)}</h1>
                </div>
                <button type="button" className="cancelar" onClick={() => callback(props.schedule._id)}>
                    Cancelar
                </button>
            </footer>
          </article>
  
  ) }
   </>
  );
};

export default ProfessionalScheduleCard;