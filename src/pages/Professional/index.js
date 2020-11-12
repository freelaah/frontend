import React, { useEffect, useState } from 'react';
import Header from './../../components/Header';
import { Link } from 'react-router-dom';
import ProfessionalCard from './../../components/ProfessionalCard';
import addImg from './../../assets/images/add.svg';
import agendaImg from './../../assets/images/agenda.svg';
import './styles.css';

import api from '../../services/api';

const Professional = () => {

  //buscar todos os servicos desse id_user
  //buscar usuario
  //buscar categoria
    
  const [servicos, setServicos] = useState([]);
  const [id_user, setId_user] = useState(localStorage.getItem('id_user'));
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState('');
  const [image_profile, setImage_profile] = useState('');
  
  useEffect(() => {
    buscarTodosServicos();
    buscarUsuario();
  }, [])  

  //TODO: alterar no back para buscar servicos só de um usuário
  async function buscarTodosServicos(){
    let json = null;
    try {
        json = await api.get("/services")
    
        json.data.map(item =>{        
            if(item.id_user === id_user){
              //let categoria_nome = await buscarCategoria(item.id_categoria) 
              servicos.push({...item}); // categoria: categoria_nome});
              
              //console.log(categoria_nome);
              //servicos.push({...item});
            }
         })

     }catch(e){
         console.log("erro " + e);
     }
  }

  async function buscarUsuario(){
    let json = null;
    try {
        json = await api.get("/users/" + id_user );
        
        setNome(json.data.nome);
        setImage_profile(json.data.img_profile);
        setLoading(true)

     }catch(e){
         console.log("erro " + e);
     }
  }

  async function buscarCategoria(id_categoria){
    console.log(">>>", id_categoria)
    
    let json = null;
    try {
        json = await api.get("/categories/" + id_categoria );
        return json.data.nome;
     }catch(e){
         console.log("erro " + e);
     }
  }

  
   let Select = () => <div>Carregando...</div> ;
    
    if(loading){
         Select = () => <>{
             servicos.map(data => 
              
              <ProfessionalCard 
                    key={data._id}
                    nome={nome}
                    img_profile={`http://localhost:5000/files/${image_profile}`}  
                    categoria={data.id_categoria} 
                    descricao={data.descricao}
                    preco={data.preco}
                    img_servico={`http://localhost:5000/files/${data.imgURL}`}
                />
              )
          }</>
     }
  
  return (
    <>
      <Header title="Meu Serviço" />
      <div className="acoesButton">
          <Link to="/profissional/servico" className="criar">
              <img src={addImg}/>
              Criar Serviço
          </Link>
          <Link to="/profissional/servicosAgendados" className="agenda">
              <img src={agendaImg}/>
              Serviços Agendados
          </Link>
      </div>
      
      <Select/>
      
    </>
  );
};

export default Professional;
