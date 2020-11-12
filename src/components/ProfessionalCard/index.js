import React from 'react';
import landing from './../../assets/images/pp.jpg';
import imgMore from './../../assets/images/imgMore.svg';
import editarImg from './../../assets/images/editar.svg';
import excluirImg from './../../assets/images/excluir.svg';
import './styles.css';

const ProfessionalCard = (props) => {
  
  return (
    <article className="teacher-item">
      <header>
          <img src={props.img_profile} alt={props.nome}/>
          <div>
              <strong>{props.nome}</strong>
              <span>{props.categoria}</span>
          </div>
      </header>

      <p align="center">{props.descricao}</p>

      <div className="wrapper-img">
        <img src={props.img_servico} alt="sobre"/>
      </div>

      <footer>
          <p>
              Preço/hora
              <strong>{props.preco}</strong>
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
