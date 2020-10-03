import styled, { css } from 'styled-components';
import landing from './../../assets/images/landing.svg';
import logo from './../../assets/images/logo.svg';
import workIcon from './../../assets/images/workIcon.svg';
import searchWorkIcon from './../../assets/images/searchWorkIcon.svg';
import imgMore from './../../assets/images/imgMore.svg';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Container = styled.div`
`;

// Início - Conteúdo inicial (verde)
export const PageLandingContent = styled.div`
    width: 100vw;
    height: 430px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--color-text-in-primary);
    background-color: var(--color-primary);
`;

export const LogoContainer = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h2 {
        font-weight: 500;
        line-height: 4.6rem;
        margin-top: 0.8rem;
        font-family: Russo One;
        text-align: initial;
        font-size: 2.055rem;
    }
`;

export const WrapperImage = styled.div`
   width: 50vw;
   height: 100%;

   width: 50vw;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: 'freeLaah'
})`
`;

export const LandingImg = styled.img.attrs({
    src: landing,
    alt: 'Plataforma de empregos'
})`
`;

// Fim - Conteúdo inicial - (verde)

// Inicio - Conteúdo Action - Botões - (Branco)
export const PageAction = styled.div`
    width: 100vw;
    height: 205px;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    padding: 0rem 15rem 0rem 15rem;
    background: white;
`;

export const Title = styled.div`
    display: block;

    > p {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    grid-area: buttons;
    justify-content: flex-start;
    margin: 3.2rem 0;

    > a {
        font-size: 2.4rem;
        width: 30rem;
        height: 10.4rem;
        border-radius: 0.8rem;
        font: 700 2.0rem Archivo;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: var(--color-button-text);

        transition: background-color 0.2s;
    }

    > a > svg {
        margin-right: 2.4rem;
    } 
`;

export const Service = styled(HashLink)`
    margin-right: 1.6rem;
    background: var(--color-primary);

    &:hover {
        background: var(--color-primary-darker);
    }
`;


export const Search = styled(HashLink)` 
    background: var(--color-secondary);

    &:hover {
        background: var(--color-secondary-dark);
    }
`;

const iconCSS = css`
   width: 4rem;
   margin-right: 2.4rem;
`;

export const WorkIcon = styled.img.attrs({
    src: workIcon,
    alt: 'Prestar Servico'
})`
    ${iconCSS}
`;

export const SearchIcon = styled.img.attrs({
    src: searchWorkIcon,
    alt: 'Buscar Servico'
})`
    ${iconCSS}
`;

// Fim - Conteúdo Action - Botões - (Branco)

// Início - Conteúdo More - Explicação - (Branco)
export const PageMore = styled.div`
    width: 100vw;
    height: 430px;

    display: flex;
    align-items: center;

    padding: 0rem 15rem 0rem 15rem;
`;

export const Explication = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
    }

    > p {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
    }
`;

export const ImgMore = styled.img.attrs({
    src: imgMore,
    alt: 'Calendários'
})`
`;

export const ButtonsContainerMore = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3.2rem;
    width: 100%;

    > a {
        width: 20rem;
        height: 7rem;
        border-radius: 0.8rem;
        font: 700 2.0rem Archivo;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: var(--color-button-text);

        transition: background-color 0.2s;
    }
`;

export const Login = styled(Link)`
    background: var(--color-secondary);

    &:hover {
        background: var(--color-secondary-dark);
    }
`;

export const Cadastrar = styled(Link)`
    background: var(--color-primary);

    &:hover {
        background: var(--color-primary-darker);
    }
`;

export const LoginIcon = styled(FaSignInAlt)`
    ${iconCSS}
`;

export const CadIcon = styled(FaUser)`
    ${iconCSS}
`;


// Fim - Conteúdo More - Explicação - (Branco)

// Início - Conteúdo Footer - Botões - (Verde)
export const PageFooter = styled.div`
    width: 100vw;
    line-height: 1.5;
    background-color: var(--color-primary);
    color: white;
`;

export const FtSocial = styled.section`
    padding: 0 1.875rem 1.25rem;
`;

export const FtSocialList = styled.ul`
    display: flex;
    justify-content: center;
    padding-top: 1.25rem;
    list-style: none;
    padding-left: 0;

    > li {
        margin: 0.5rem;
        font-size: 1.25rem;

        > a {
            text-decoration: none;
            color: #eee;

            > svg {
                width: 30px;
                height: 30px;
            }
        }
    }
`;

export const FtLegal = styled.section`
    padding: 0.9375rem 1.875rem;
    background-color: var(--color-primary-darker);
`;

export const FtLegaList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    font-family: Poppins;
    font-weight: bold;

    > li {
        margin: 0.125rem 0.625rem;
        white-space: nowrap;
        list-style: none;
        padding: 0rem 15rem 0rem 15rem;


        > a {
            text-decoration: none;
            color: #eee;

            > svg {
                width: 30px;
                height: 30px;
            }
        }
    }
`;
// Início - Conteúdo Footer - Botões - (Verde)
