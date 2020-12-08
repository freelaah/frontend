import React, { useEffect, useState } from 'react';

import ClientScheduleCard from '../ClientScheduleCard';

import landing from './../../assets/images/pp.jpg';
import imgWhatsapp from './../../assets/images/whatsapp.svg';
import { Link } from 'react-router-dom';


import './styles.css';


import api from '../../services/api';

const CalendarCardClient = ({cliente}) => {
  
  //buscar todos os servicos agendados desse cliente
  const [servicos, setServicos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //const [agendados, setAgendados] = useState();
  const cliente_id = localStorage.getItem('id_user');

  useEffect(() => {
    buscarTodosServicosAgendados();
  }, []); 
  
  useEffect(() => {
    setIsLoaded(true);
  }, [servicos]); 
  
  async function buscarTodosServicosAgendados(){
    
    let json = null;
    try {
                              
        json = await api.get(`/schedules/client/${cliente_id}`); 
        
        let newArray = [];  
        json.data.map(item => {        
              newArray.push({...item});
            }
        );
        
        setServicos([...newArray]);

    }catch(e){
         console.log("erro " + e);
    }
  }

  async function cancelarAgendamento(id_schedule){
    
    try {                  
       let resposta = await api.delete(`/schedules/${id_schedule}`); 
     }catch(e){
         console.log("erro " + e);
     }
  }

  function cancelarEAtualizarDados(id_schedule){
    cancelarAgendamento(id_schedule);
    buscarTodosServicosAgendados();
  }

   if(!isLoaded){

        return <div>Carregando...</div>

   }else{

        return(
        <> 
          {
                  servicos.map(data => 
                        <ClientScheduleCard 
                            key={data._id}
                            schedule={data}
                            cb={cancelarEAtualizarDados}
                       />)   
           }      
        </>
        )
  };
};
export default CalendarCardClient;
