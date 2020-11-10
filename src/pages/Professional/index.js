import React from 'react';
import Header from './../../components/Header';
import { Link } from 'react-router-dom';
import ProfessionalCard from './../../components/ProfessionalCard';
import addImg from './../../assets/images/add.svg';
import agendaImg from './../../assets/images/agenda.svg';
import './styles.css';

const Professional = () => {
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
      <ProfessionalCard />
    </>
  );
};

export default Professional;
