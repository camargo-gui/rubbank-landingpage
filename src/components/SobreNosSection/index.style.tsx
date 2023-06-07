import styled from 'styled-components'
import homem from '../../images/homem-celular.jpg'
import homemmobile from '../../images/homem-celular-mobile.jpg'


export const Background = styled.div`
    background-image: url(${homem});
    /* background-repeat: no-repeat; */
    backdrop-filter: blur(50px);
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left:10%;
    padding-right:10%;
    opacity: 90%;
    padding-bottom:5%;
    @media (max-width:500px){
        background-image: url(${homemmobile});
        object-fit: cover;
        object-position: 50%;
    }
  
`


export const Titulo = styled.p`

    font-family:'Open Sans';
    font-size:110px;
    font-weight: 600;
    color: #fff;
    margin-top:5%;
    margin-bottom:0%;

  


    @media (max-width:800px){
        font-size:65px;
    }

    @media (max-width:500px){
        font-size:50px;
    }

    @media (max-width:350px){
        font-size:40px;
    }
`


export const Texto = styled.p`
    font-family:'Open Sans';
    font-size:30px;
    font-weight: 300;
    color: #fff;
    border-radius: 0.575rem;
    margin-bottom: 5%;
    text-shadow: 0.1em 0.1em 0.2em black;

    @media (max-width:800px){
        font-size:22px;
    }

    @media (max-width:500px){
        margin-bottom: 8%;
        font-size:16px;
    }

    @media (max-width:350px){
        margin-bottom: 8%;
        font-size:13px;
    }

    @media (min-width:1900px) and (max-width:2090px){
        font-size:34px;
    }
`

export const Botao = styled.div`
    background-color: #647CDF;
    cursor: pointer;
    font-family: Roboto;
    font-size: 60px;
    color: white;
    width:30%;
    padding:3%;
    border: none;
    margin:0 auto;
    border-radius: 0.575rem ;

    @media (max-width:1100px){
        font-size:45px;
    }

    @media (max-width:800px){
        font-size:30px;
    }

    @media (max-width:500px){
        width:70%;
        font-size:30px;
    }
    @media (max-width:350px){
        width:70%;
        font-size:30px;
    }
`