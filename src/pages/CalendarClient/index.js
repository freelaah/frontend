import React from 'react';
import CalendarCard from '../../components/CalendarCardClient';
import Header from '../../components/Header';
import './styles.css';

const Calendar = () => {
  return (
    <>
      <Header title="Serviços Agendados" />
      <CalendarCard cliente/>
    </>
  );
};

export default Calendar;
