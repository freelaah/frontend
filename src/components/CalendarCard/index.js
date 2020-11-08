import React from 'react';
import landing from './../../assets/images/pp.jpg';
import imgWhatsapp from './../../assets/images/whatsapp.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const CalendarCard = ({profissional, cliente}) => {
  console.log(cliente);
  return (
    <article className="teacher-item">
      <h1>Profissional:</h1>
      <hr></hr>
      <header>
          <img src={landing} alt="nome professor"/>
          <div>
              <strong>Sillas Vinícius</strong>
              <span>Designer de interiores</span>
          </div>
          {profissional && 
            <div className="contactButton">
              <Link to="#">
                  <img src={imgWhatsapp} />
                  Entrar em contato
              </Link>
            </div>
          }
          
      </header>
      <hr></hr>

      <h1>Cliente:</h1>
      <hr></hr>
      <header>
          <img src={landing} alt="nome professor"/>
          <div>
              <strong>Sillas Vinícius</strong>
          </div>
          {cliente && 
            <div className="contactButton">
              <Link to="#">
                  <img src={imgWhatsapp} />
                  Entrar em contato
              </Link>
            </div>
          }
      </header>
      <hr></hr>
      <h1>Local:</h1>
      <hr></hr>
      <header>
          <div>
              <strong>Endereço:</strong><p>Praça Hélvio Cardoso, 217, Segismundo Pereira, Uberlândia, MG.</p>
          </div>
      </header>
      <hr></hr>

      {/* <p align="center">fgffgdfgdfgdfgdfsfffffffffffffffffffffffffffffffsdfdsfsdfsdf</p>

      <div className="wrapper-img">
        <img src={imgMore} alt="sobre"/>
      </div> */}

      <footer>
          <p>
              Preço/hora
              <strong>R$ 90.00</strong>
          </p>
          <div className="inputBlock">
            <label htmlFor="dataServico">Data do serviço:</label>
            <input id="dataServico" name="dataServico" type="date" className="date" />
          </div>
          <button type="button">
              Cancelar
          </button>
      </footer>
    </article>
  );
};

export default CalendarCard;
