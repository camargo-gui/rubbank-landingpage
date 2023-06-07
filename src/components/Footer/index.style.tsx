import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 12%;
    margin-right: 12%;
`

export const Rubbank = styled.p`
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Inter';

    @media (max-width:500px){
        font-size: 1.0rem;
    }
    @media (min-width:500px)and(max-width:800px){
        font-size: 1.25rem;
    }
`

export const Disponivel = styled.p`
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Inter';
    white-space: nowrap;
    @media (max-width:500px){
        font-size: 0.75rem;
    }
    @media (min-width:500px)and(max-width:800px){
        font-size: 1.25rem;
    }

`

export const Logo = styled.img`
    height:50px;
    @media (max-width:500px){
        height:20px;
    }
    @media (min-width:500px)and (max-width:800px){
        height: 30px;
    }
`

export const DivLogos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:35%;
    justify-content: space-around;

    @media (max-width:500px){
        width:50%;
    }

    @media (min-width:500px)and(max-width:1100px){
        width:50%;
    }
`