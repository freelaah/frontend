import React from 'react';
import landing from './../../assets/images/pp.jpg';
import imgMore from './../../assets/images/imgMore.svg';
import editarImg from './../../assets/images/editar.svg';
import excluirImg from './../../assets/images/excluir.svg';
import './styles.css';

const ProfessionalCard = () => {

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
          <div className="buttons">
            <button type="button" className="editar">
              <img src={editarImg} />
            </button>
            <button type="button" className="excluir">
              <img src={excluirImg} />
            </button>
          </div>
      </footer>
    </article>
  );
}

export default ProfessionalCard;
