import styled from 'styled-components';
import logo from './../../assets/images/logo.svg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    background-color: var(--color-primary);
    height:100vh;

    .box-white{
        background-color:var(--color-title-in-primary);
        border-radius:5px;
        padding:20px;
        width:500px;
        
        h1,h2,h3,h4,h5,h6,label,span {
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
        }

        .btn{
            border-radius: 5px;
            background-color: var(--color-secondary);
            color: var(--color-title-in-primary);
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
        }

      
    }
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: 'freeLaah'
})`
    height: 10%;
    margin-right: 100px;
`;


