import React, { useEffect, useState } from 'react';
import Header from './../../components/Header';
import { Link } from 'react-router-dom';
import ProfessionalCard from './../../components/ProfessionalCard';
import addImg from './../../assets/images/add.svg';
import agendaImg from './../../assets/images/agenda.svg';
import './styles.css';

import api from '../../services/api';

const Professional = () => {
    
  const [servicos, setServicos] = useState([]);
  const [id_user, setId_user] = useState(localStorage.getItem('id_user'));
  const [nome, setNome] = useState('');
  const [image_profile, setImage_profile] = useState('');
  const [categoria, setCategoria] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    buscarTodosServicosPorUsuario();
  }, [])  

  async function buscarTodosServicosPorUsuario(){

    try {
        let json = await api.get("/services/user/" + id_user);
    
        json.data.map(item =>{        
              setNome(item.user.nome);
              setImage_profile(item.user.img_profile);
              servicos.push({...item}); 
            }
        )
        setIsLoaded(true);

     }catch(e){
         console.log("erro " + e);
     }
  }
  
  async function deletarServico(servico_id, item){
      console.log("vai deletar: " + servico_id + " item " + item) ;

      var index = servicos.indexOf(item);

      api.delete(`services/${servico_id}`).then(resp => {
        var filteredAry = servicos.filter(function(e) { return e !== item })
        setServicos(filteredAry);
    })
  }

   let InsetComponentRuntime = () => <div>Carregando...</div> ;
    
    if(isLoaded){

      InsetComponentRuntime = () => <>{
             servicos.reverse().map(data =>             
              <ProfessionalCard
                    key={data._id}
                    cb={deletarServico}
                    servico_id={data._id}
                    item={data}
                    nome={nome}
                    img_profile={`http://localhost:5000/files/${image_profile}`}  
                    categoria_id={data.id_categoria} 
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
      
      <InsetComponentRuntime/>
      
    </>
  );
};

export default Professional;
