import React from 'react';
import { Link } from 'react-router-dom';
import landing from './../../assets/images/pp.jpg';
import imgMore from './../../assets/images/imgMore.svg';
import whatsappIcon from './../../assets/images/whatsapp.svg';
import './styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Card = () => {
  return (
    <article className="teacher-item">
      <header>
          <img src={landing} alt="nome professor"/>
          <div>
              <strong>Sillas Vinícius</strong>
              <span>Designer de interiores</span>
          </div>
      </header>

      <p align="center">fgffgdfgdfgdfgdfsfffffffffffffffffffffffffffffffsdfdsfsdfsdf</p>

      <div className="wrapper-img">
        <img src={imgMore} alt="sobre"/>
      </div>

      <footer>
          <p>
              Preço/hora
              <strong>R$ 90.00</strong>
          </p>
          <Link to="#" type="button" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
          </Link>
      </footer>
    </article>
  );
}

export default Card;
