import styled from 'styled-components'

export const Background = styled.div`
        background-color: white;
        position: relative;
        padding-bottom: 5%;

`

export const DivTexto = styled.div`
    text-align: center;
`

export const TextoVantagens = styled.p`
    font-size: 74px;
    color: #1D1C3C;
    font-family: 'Inter', sans-serif;
    margin-bottom:0;

    @media (max-width: 350px){
        font-size: 30px;
    }

    @media (min-width: 350px) and (max-width:500px){
        font-size: 34px;
    }

    @media (min-width: 500px) and (max-width:800px){
        font-size: 50px;
    }

    @media (min-width: 2000px){
        font-size: 110px;
    }
`

export const TextoVantagensBold = styled.span`
    font-size: 74px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #1D1C3C;

    @media (max-width: 350px){
        font-size: 30px;
    }

    @media (min-width: 350px) and (max-width:500px){
        font-size: 34px;
    }

    @media (min-width: 500px) and (max-width:800px){
        font-size: 50px;
    }

    @media (min-width: 2000px){
        font-size: 110px;
    }
`

export const DivCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Card = styled.div`
    margin-top: 3%;
    padding: 1%;
    border-radius: 0.575rem;
    text-align: center;
    background-color: #6E7ADE;
    width: 40%;


    @media (max-width: 500px){
        width: 80%;
        padding:3%;
    }
    
`

export const TextoCard = styled.p`
    color: white;
    font-size: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;

    @media (max-width: 500px){
        font-size: 14px;
    }

    @media (min-width: 500px) and (max-width:800px){
        font-size: 24px;
    }

    @media (min-width: 2000px){
        font-size: 60px;
    }
`

export const TituloCard = styled.p`
    color: white ;
    font-size: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;

    @media (max-width: 500px){
        font-size: 18px;
    }

    @media (min-width: 500px) and (max-width:800px){
        font-size: 28px;
    }

    @media (min-width: 800px) and (max-width:1100px){
        font-size: 34px;
    }

    @media (min-width: 2000px){
        font-size: 74px;
    }
`