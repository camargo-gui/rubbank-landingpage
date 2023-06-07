import styled from 'styled-components'


export const Background = styled.div`
        display:flex;
        width:100%;
        height:750px;
        background-color:#6E7ADE;

        @media(max-width:600px){
            height:490px !important;
        }

        @media (max-width:400px){
            padding-bottom: 5%;;
        }
`

export const YellowMan = styled.img`
    margin-left:5%;
    width:500px;
    height:auto;
    position:relative;

    @media (max-width:600px){
        display:none;
    }
/* 
    @media (min-width:600px) and (max-width:500px){
        display:none;
        width:300px;
        height:490px;
        margin-right:10%;
        margin-left:0;
    } */

    @media(min-width:1200px) and (max-width:1600px){
        width:600px;
        margin-right:10%;
        margin-left:0;
    }

    @media(min-width:500px) and (max-width:800px){
        width:auto;
        height:auto;
        margin-right:10%;
        margin-left:0;
    }

    @media (min-width:2000px){
        margin-right:20%;
    }
  
`

export const Titulo = styled.span`
    font-size:64px;
    margin:0;
    margin-bottom:15% !important;
    font-family: 'Inter', sans-serif;
    font-weight: 600;

    @media (max-width:400px){
        font-size:40px;
    }

    @media(min-width:1200px) and (max-width:1600px){
        font-size:80px;
    }

    @media (min-width:2000px){
        font-size:90px
    }
`

export const DivTextos = styled.div`

    display:flex;
    flex-direction: column;
    justify-content: center;


`

export const DivConteudo = styled.div`
    margin-top:5%;
    display:flex;
    align-items:center;
    flex-direction:column;
    position:relative;



    @media (max-width:600px){
        justify-content:center;
    }

    @media(min-width:1200px) and (max-width:1600px){
        margin-left:5%;
        margin-top:0;
    }

    @media (min-width:2000px){
        margin-top:2%;
        width:70%;
    }


`



export const AboutCaixinhas = styled.p`
    margin-top:10%;
    font-size:32px;
    position:relative;
    color:white;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    text-align:center;
    width:100%;
    margin-left:15%;


    @media (max-width:400px){
        margin:0 auto;
        font-size:20px;
        width:80%
    }

    @media (min-width:400px) and (max-width:600px){
        margin:0 auto;
        font-size:20px;
        width:80%
    }


    @media(min-width:1200px) and (max-width:1600px){
        width:80%;
        margin-left:10%;
        font-size:36px;
    }

    @media (min-width:2000px){
        width:50%;
        margin:0;
        font-size:45px
    }
`

export const Square = styled.div`
    background-color:#EE9516;
    width:100%;
    margin:0 auto;
    margin-left:10%;
    margin-top:10%;
    border-radius:0.575rem;
    box-shadow: -12px 11px 11px -8px rgba(0,0,0,0.75);
    height:auto;
    position:relative;
    text-align:center;

  

    @media (max-width:600px){
        margin:0 auto;
        margin-top:10%;
        width:80%;
    
    }

    @media(min-width:1200px) and (max-width:1600px){
        width:80%;
        margin-left:16%;
        margin-top:5%;
    }

    @media (min-width:2000px){
        width:50%;
        margin:0;
        margin-top:2%;
    }
`



export const SquareText = styled.p`
    font-size:40px;
    margin:2%;
    font-family: 'Inter', sans-serif;
    color:white;



    @media (max-width:600px){
        z-index:4;
        font-size:26px;
    }

    @media (min-width:2000px){
        z-index:4;
        font-size:60px;
    }
`

export const SquareTextBold = styled.span`
    font-size:40px;
    margin:2%;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color:white;



    @media (max-width:600px){
        z-index:4;
        font-size:26px;
    }

    @media (min-width:2000px){
        z-index:4;
        font-size:60px;
    }
`

export const Checker = styled.img`
    position:absolute;
    z-index:1;
    margin-top:-0%;
    margin-left:47%;
    width:6%;
`