import React from 'react';
import landing from './../../assets/images/pp.jpg';
import imgMore from './../../assets/images/imgMore.svg';
import './styles.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const Card = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10){
          dd='0'+dd
      } 
      if(mm<10){
          mm='0'+mm
      } 

  today = yyyy+'-'+mm+'-'+dd;

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
          <div className="inputBlock">
            <label htmlFor="dataServico">Data do serviço:</label>
            <input id="dataServico" name="dataServico" type="date" className="date"min={today}/>
          </div>
          <button type="button">
              Agendar
          </button>
      </footer>
    </article>
  );
}

export default Card;
