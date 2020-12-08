import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientCard from '../../components/ClientCard';
import Header from '../../components/Header';
import agendaImg from './../../assets/images/agenda.svg';
import pesquisaImg from './../../assets/images/pesquisa.svg';

import SelectCategories from '../../components/SelectCategories'

import api from '../../services/api';
import './styles.css';

const Client = () => {

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
    const [servicos, setServicos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filterData, setFilterData] = useState(today);
    const [dataSelect, setDataSelect] = useState(''); // Usado no select

    useEffect(() => {
        buscarTodosServicos();
        setIsLoading(true);    
    }, []);

    
    function changeCategory(value){
        setCategoria(value);
    }

    function bucarComFiltro(){
        setFilterData(dataSelect);
        buscarTodosServicos(categoria);
    }

    async function buscarTodosServicos(id_categoria){
        let json = null;
        try {
            let url = (!id_categoria) ? `/services/` 
                                      :  `/services/category/${id_categoria}`

            json = await api.get(url); 
            
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

    
    if(!isLoading){
        return <div>Carregando...</div>;
    }
    else { 
        return (
            <>
                <Header title="Estes são os FreeLaah disponíveis." />
                {/* <div className="agendaButton">
                </div> */}
                <div className="filtros">


                    <SelectCategories onChange={(id) => changeCategory(id)}/>

                    {/* <input id="dataServico" name="dataServico" type="date" className="date" min={today}  onChange={ event => setDataSelect(event.target.value)} />                     */}

                    <button type="button" className="buscar" onClick={ bucarComFiltro } >
                        <img src={pesquisaImg}/>
                        Buscar
                    </button>


                    <Link to="/cliente/servicosAgendados" id="agenda">
                        <img src={agendaImg}/>
                        Serviços Agendados
                    </Link>
                

                    
                </div>
                {
                    //yyyy+'-'+mm+'-'+dd;
                    servicos.map(data => 
                        //(data.data === filterData) &&
                        <ClientCard 
                            key={data._id}
                            id_servico={data.id} 
                            id_user={data.id_user} 
                            categoria_id={data.id_categoria}
                            descricao={data.descricao}
                            preco={data.preco}
                            data_servico={data.data}
                            img_servico={`${baseURL}/files/${data.imgURL}`}
                        />
                    )   
                }
                
            </>
        );
    }
}

export default Client;