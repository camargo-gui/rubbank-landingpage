import styled from 'styled-components'
import "./style.css"

export const HeaderGeral = styled.div`
    margin-top: 0.5%;
    display: flex;
    justify-content: space-between;
`

export const LogoHeader = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 10%;

    @media (max-width:800px) {
            display: none;
        }
    
    @media (max-width:500px) {
            display: none;
        }

`

export const HookGroup = styled.div`


    width: 30%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-weight: 300;
    font-size: 24px;

 


    @media (max-width:800px) {
            margin-right: 10%;
            width: 100%;
            display: flex;
            margin-right: 10%;
            margin-left:10%;
            justify-content: space-between;
        }

        @media (max-width:500px) {
            font-size: 14px;
            margin-right: 0%;
            width: 100%;
            display: flex;
            margin-right: 10% !important;
            margin-left: 10%;
            justify-content: space-between;
        }

        @media(min-width:800px){
            padding-right:10%;
        }
`

export const Hook = styled.p`
        @media(min-width:800px){
            font-family: 'Open Sans';
            white-space: nowrap;
            margin-right:5%;
        }

`