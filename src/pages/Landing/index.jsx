import React from 'react';

import { 
  Container,
  PageLanding,
  LogoContainer,
  Logo,
  LandingImg,
  PageLandingContent,
  PageMore,
  Title,
  ButtonsContainer,
  Service,
  WorkIcon,
  Search,
  SearchIcon,
} from './styles';

const Landing = () => {
  return (
    <Container>
      <PageLanding>
        <PageLandingContent className="container">
          <LogoContainer>
            <Logo />
            <h2>Conectando quem busca com quem oferece!</h2>
          </LogoContainer>
          <LandingImg />
        </PageLandingContent>
      </PageLanding>

      <PageMore>
        <Title>
          <p>Seja bem-vindo.</p>
          <p><strong>O que deseja fazer?</strong></p>
        </Title>
        <ButtonsContainer>
          <Service href="/login">
            <WorkIcon />
            Prestar Serviço
          </Service>
          <Search href="/login">
            <SearchIcon />
            Buscar Serviço
          </Search>
        </ButtonsContainer>
      </PageMore>
    </Container>
  );
};

export default Landing;
