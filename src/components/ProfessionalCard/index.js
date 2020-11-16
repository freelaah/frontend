import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import editarImg from './../../assets/images/editar.svg';
import excluirImg from './../../assets/images/excluir.svg';
import './styles.css';

const ProfessionalCard = (props) => {

  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    buscarCategoria(props.categoria_id);
  }, []); 

  async function buscarCategoria(id_categoria){
    console.log(">>>", id_categoria)
  
    try {
        const json = await api.get("/categories/" + id_categoria );
        setCategoria(json.data.nome);
     }catch(e){
         console.log("erro " + e);
     }
  }
  
  return (
    <article className="teacher-item">
      <header>
          <img src={props.img_profile} alt={props.nome}/>
          <div>
              <strong>{props.nome}</strong>
              <span>{categoria}</span>
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
