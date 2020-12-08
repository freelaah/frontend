import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const ClientCard = ({id_servico, id_user, categoria_id, descricao, preco, img_servico, data_servico}) => {

  const baseURL = api.baseURL;
  
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
  
  
  const [categoria, setCategoria] = useState('');
  const [nome, setNome] = useState('');
  const [imageProfile, setImageProfile] = useState('');
  const [diaServico, setDiaServico] = useState(today);
  const [isBtnActive, setIsBtnActive] = useState(true);

  useEffect(() => {
    buscarCategoria(categoria_id);
    buscarUsuario(id_user);
  }, []); 

  //TODO: não precisa buscar a categoria passar por prop..
  async function buscarCategoria(id_categoria){
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
        setImageProfile(`${baseURL}/files/` + json.data.img_profile);

     }catch(e){
         console.log("erro " + e);
     }
  }

  function formatData(data){
    //2020-12-01
    let arrData = data.split("-");
    return `${arrData[2]}/${arrData[1]}/${arrData[0]}`;
  }

  
  async function agendarServico(){
    setIsBtnActive(false);

    //let id = id_servico;
    let id_profissional = id_user;
    let id_cliente = localStorage.getItem('id_user');
    let dia_servico = diaServico; //pegar o dia
    
    const data = {id_servico, id_profissional, dia_servico, id_cliente};
    console.log(data);

    try {
      const response = await api.post("/schedules", data);
      console.log(">>> gravou servico");
    }catch(error){
       console.log("erro " + error);
    }
    
  }

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
              Preço/dia
              <strong>R${preco}</strong>
          </p>
          <div className="inputBlock">
            <label htmlFor="dataServico">Agendar para o dia:</label>
            {/* <h1>{formatData(data_servico)}</h1> */}
             
             <input id="dataServico" name="dataServico" type="date" className="date" min={today} value={diaServico} onChange={ (event) => setDiaServico(event.target.value) }/> 

          </div>
          
          {
            (isBtnActive) && <button type="button" id="agendar" onClick={agendarServico} >
            Agendar
            </button>
          }

      </footer>
    </article>
  );
}

export default ClientCard;
