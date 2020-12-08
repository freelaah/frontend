import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import imgWhatsapp from './../../assets/images/whatsapp.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const ClientScheduleCard = (props ) => {
  
  const callback = props.cb; 

  let txtMensagem = "Ol%C3%A1%20eu%20fiz%20uma%20reserva%20do%20seu%20servi%C3%A7o%20no%20Freelaah%20e%20gostaria%20de%20comunicar%20que.";

  function formatData(data){
    //2020-12-01
    let arrData = data.split("-");
    return `${arrData[2]}/${arrData[1]}/${arrData[0]}`;
  }

  return (
  <>
  { (props.schedule != undefined) && (
   
      <article className="teacher-item">
            <h1>Profissional:</h1>
            <hr></hr>
            <header>
                <img src={`http://localhost:5000/files/${props.schedule.profissional.img_profile}`} alt="nome professor"/>
                <div>
                    <strong>{props.schedule.profissional.nome}</strong>
                    <span>{props.schedule.categoria.nome}</span>
                </div>
                
                  <div className="contactButton">
                  
                    <a href={`https://wa.me/${props.schedule.profissional.telefone}?text=${txtMensagem}`} target="blank">
                        <img src={imgWhatsapp} />
                        Entrar em contato
                    </a>
                  </div>
                
            </header>
            <hr></hr>
            <header>
                <div>
                  
                    <strong>Serviço:</strong><p>{props.schedule.servico.descricao}</p>
                </div>
            </header>
            <hr></hr>

            <footer>
                <p>
                    Preço/dia
                <strong>R$ {props.schedule.servico.preco}</strong>
                </p>
                <div className="inputBlock">
                  <label htmlFor="dataServico">Data do serviço:</label>
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

export default ClientScheduleCard;