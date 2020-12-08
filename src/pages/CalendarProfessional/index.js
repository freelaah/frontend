import React from 'react';
import CalendarCard from '../../components/CalendarCardProfessional';
import Header from '../../components/Header';
import './styles.css';

const Calendar = () => {
  return (
    <>
      <Header title="Serviços Agendados"/>
      <CalendarCard profissional/>
    </>
  );
};

export default Calendar;
