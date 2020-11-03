import React from 'react';

import logoImg from './../../assets/images/logo.svg';
import backIcon from './../../assets/images/back.svg';

import './styles.css';
import { Link } from 'react-router-dom';

const Header = ({title, description, children}) => {
  return (
    <header className="header">
      <div className="navbar">
          <div className="voltar">
            <Link to="/" className="btnVoltar">
                <img src={backIcon} alt="Voltar" />
            </Link>
          </div>
          <div className="logo">
            <Link to="/" className="btnLogo">
                <img src={logoImg} alt="Freelaah" />
            </Link>
          </div>
      </div>

      <div className="text">
          <strong>{title}</strong>
          {description && <p>{description}</p>}

          {children}
      </div>      
    </header>
  );
};

export default Header;
