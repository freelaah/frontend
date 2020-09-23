import styled, { css } from 'styled-components';
import landing from './../../assets/images/landing.svg';
import logo from './../../assets/images/logo.svg';
import workIcon from './../../assets/images/workIcon.svg';
import searchWorkIcon from './../../assets/images/searchWorkIcon.svg';
import Login from '../Login';

export const Container = styled.div`

`;

export const PageLanding = styled.div`
    width: 100vw;
    height: 430px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background-color: var(--color-primary);
`;


export const PageLandingContent = styled.div`
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 
    "logo hero hero"
    "buttons buttons total"
    ;
`;

export const LogoContainer = styled.div`
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    > h2 {
        font-weight: 500;
        line-height: 4.6rem;
        margin-top: 0.8rem;
        font-family: Russo One;
        text-align: initial;
        font-size: 2.055rem;
    }
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: 'freeLaah'
})`
    height: 100%;
`;

export const LandingImg = styled.img.attrs({
    src: landing,
    alt: 'Plataforma de empregos'
})`
    grid-area: hero;
    justify-content: end;
    width: 100%;
`;

export const PageMore = styled.div`
    width: 100vw;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    padding: 0rem 15rem 0rem 15rem;
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

export const Service = styled.a`
    margin-right: 1.6rem;
    background: var(--color-primary);

    &:hover {
        background: var(--color-primary-light);
    }
`;


export const Search = styled.a` 
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
