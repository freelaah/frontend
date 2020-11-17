import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const ClientCard = ({id_user, categoria_id, descricao, preco, img_servico}) => {

  const [categoria, setCategoria] = useState('');
  const [nome, setNome] = useState('');
  const [imageProfile, setImageProfile] = useState('');

  useEffect(() => {
    buscarCategoria(categoria_id);
    buscarUsuario(id_user);
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

  async function buscarUsuario(id_user){
    let json = null;
    try {
        json = await api.get("/users/" + id_user );
        
        setNome(json.data.nome);
        setImageProfile("http://localhost:5000/files/" + json.data.img_profile);

     }catch(e){
         console.log("erro " + e);
     }
  }

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
          <img src={imageProfile} alt={nome}/>
          <div>
              <strong>{nome}</strong>
              <span>{categoria}</span>
          </div>
      </header>

      <p align="center">{descricao}</p>

      <div className="wrapper-img">
        <img src={img_servico} alt="sobre"/>
      </div>

      <footer>
          <p>
              Preço/hora
              <strong>R$ {preco}</strong>
          </p>
          <div className="inputBlock">
            <label htmlFor="dataServico">Data do serviço:</label>
            <input id="dataServico" name="dataServico" type="date" className="date" min={today}/>
          </div>
          <button type="button" id="agendar">
              Agendar
          </button>
      </footer>
    </article>
  );
}

export default ClientCard;
