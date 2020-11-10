import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClientCard from '../../components/ClientCard';
import Header from '../../components/Header';
import agendaImg from './../../assets/images/agenda.svg';
import pesquisaImg from './../../assets/images/pesquisa.svg';
import './styles.css';

const Client = () => {
    const [categoria, setCategoria] = useState('');

    function changeType(value){
        setCategoria(value);
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
            <ClientCard />
        </>
    )
}

export default Client;