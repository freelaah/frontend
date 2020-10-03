import React from 'react';

import {
FaFacebook,
FaTwitter,
FaInstagram,
FaGithub,
FaLinkedin,
FaYoutube,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { 
  Container,
  LogoContainer,
  Logo,
  LandingImg,
  PageLandingContent,
  PageMore,
  PageFooter,
  Title,
  ButtonsContainer,
  Service,
  WorkIcon,
  Search,
  SearchIcon,
  WrapperImage,
  PageAction,
  Explication,
  ImgMore,
  FtSocial,
  FtSocialList,
  FtLegal,
  FtLegaList,
  ButtonsContainerMore,
  Login,
  LoginIcon,
  Cadastrar,
  CadIcon,
} from './styles';

const Landing = () => {
  return (
    <Container>
        <PageLandingContent>
          <LogoContainer>
            <Logo />
            <h2>Conectando quem busca com quem oferece!</h2>
          </LogoContainer>
          <WrapperImage>
            <LandingImg />
          </WrapperImage>
        </PageLandingContent>

        <PageAction>
          <Title>
            <p>Seja bem-vindo.</p>
            <p><strong>O que deseja fazer?</strong></p>
          </Title>
          <ButtonsContainer>
            <Service smooth to="/#more">
              <WorkIcon />
              Prestar Serviço
            </Service>
            <Search smooth to="/#more">
              <SearchIcon />
              Buscar Serviço
            </Search>
          </ButtonsContainer>
       </PageAction>

       <PageMore>
          <Explication id="more">
              <h1>Conectando quem busca com quem oferece!</h1>
              <p>Conecte com a FreeLaah, não perca tempo!!! Você pode prestar serviço ou buscar serviços. 
                Entre e confira!! Simples assim.  Faça sua escolha, 
                clique no botão abaixo, na opção que você desejar! </p>
              <ButtonsContainerMore>
                <Login to="/login">
                  <LoginIcon />
                  Login           
                </Login>
                <Cadastrar to="/cadastro">
                  <CadIcon />
                  Cadastrar
                </Cadastrar>
              </ButtonsContainerMore>
          </Explication>
          <WrapperImage>
            <ImgMore/>
          </WrapperImage>
       </PageMore>

       <PageFooter>
         <FtSocial>
           <FtSocialList>
            <li><Link to="#"><FaFacebook /></Link></li>
            <li><Link to="#"><FaTwitter /></Link></li>
            <li><Link to="#"><FaInstagram /></Link></li>
            <li><Link to="#"><FaGithub /></Link></li>
            <li><Link to="#"><FaLinkedin /></Link></li>
            <li><Link to="#"><FaYoutube /></Link></li>
           </FtSocialList>
         </FtSocial>

         <FtLegal>
           <FtLegaList>
            <li><Link to="#">Terms &amp; Conditions</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li>&copy; 2020 Copyright FreeLaah Inc.</li>
           </FtLegaList>
         </FtLegal>
       </PageFooter>

    </Container>
  );
};

export default Landing;
