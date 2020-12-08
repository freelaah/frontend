import React, { useEffect, useState } from 'react';

import ProfessionalScheduleCard from '../ProfessionalScheduleCard';


import './styles.css';

import api from '../../services/api';

const CalendarCardProfessional = ({profissional}) => {
  
  //buscar todos os servicos agendados desse profissional
  const [servicos, setServicos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const profissional_id = localStorage.getItem('id_user');

  useEffect(() => {
    buscarTodosServicosAgendados();
  }, []); 
  
  useEffect(() => {
    setIsLoaded(true);
  }, [servicos]); 
  
  async function buscarTodosServicosAgendados(){
    
    let json = null;
    try {
                              
        json = await api.get(`/schedules/professional/${profissional_id}`); 
        
        let newArray = [];  
        json.data.map(item => {        
              newArray.push({...item});
              console.log(item);
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
                        <ProfessionalScheduleCard 
                            key={data._id}
                            schedule={data}
                            cb={cancelarEAtualizarDados}
                       />)   
           }      
        </>
        )
  };
};
export default CalendarCardProfessional;
