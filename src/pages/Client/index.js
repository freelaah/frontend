import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientCard from '../../components/ClientCard';
import Header from '../../components/Header';
import agendaImg from './../../assets/images/agenda.svg';
import pesquisaImg from './../../assets/images/pesquisa.svg';

import api from '../../services/api';
import './styles.css';

const Client = () => {
    const [categoria, setCategoria] = useState('');
    const [servicos, setServicos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [imageProfile, setImageProfile] = useState('users/sem_imagem.jpg');
    const [id_user, setId_user] = useState(localStorage.getItem('id_user'));

    function changeType(value){
        setCategoria(value);
    }

    useEffect(() => {
        buscarTodosServicos();
        buscarUsuario();
    }, [])  

    async function buscarTodosServicos(){
        let json = null;
        try {
            json = await api.get("/services");
        
            json.data.map(item => {        
                  servicos.push({...item});
                }
            );

             setLoading(true);
    
             console.log(servicos);
    
        }catch(e){
             console.log("erro " + e);
        }
    }

    async function buscarUsuario(){
        let json = null;
        try {
            json = await api.get("/users/" + id_user );
            
            setNome(json.data.nome);
            setImageProfile(json.data.img_profile);
            
    
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

    if(!loading){
        return <div>Carregando...</div>;
    }
    else { 
        return (
            <>
                <Header title="Estes são os FreeLaah disponíveis." />
                <div className="agendaButton">
                    <Link to="/cliente/servicosAgendados" id="agenda">
                        <img src={agendaImg}/>
                        Serviços Agendados
                    </Link>
                </div>
                <div className="filtros">
                    <select defaultValue={categoria} id="categoria" onChange={(evt) => changeType(evt.target.value) }>
                        <option value="" disabled hidden>Categoria</option>
                        <option value="1">Designer de Interfaces</option>
                        <option value="2">Programador</option>
                        <option value="3">Cozinheiro</option>
                        <option value="4">Pintor</option>
                        <option value="5">Enfermeira</option>
                        <option value="6">Professor</option>
                    </select>
                    <input id="dataServico" name="dataServico" type="date" className="date" min={today}/>
                    <button type="button" className="buscar">
                        <img src={pesquisaImg}/>
                        Buscar
                    </button>
                </div>
                {
                    servicos.map(data => 
                        <ClientCard 
                            key={data._id} 
                            id_user={data.id_user} 
                            categoria_id={data.id_categoria}
                            descricao={data.descricao}
                            preco={data.preco}
                            img_servico={`http://localhost:5000/files/${data.imgURL}`}
                        />
                    )
                }
                
            </>
        );
    }
}

export default Client;