import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #647CDF;
    font-family: Roboto;
    font-size: 40px;
    color: white;
    width:280px;
    height:70px;
    border: none;
    margin-top:-40% !important;
    margin-left: -15% !important; 
    margin:0 auto;
    border-radius: 0.375rem ;

    @media (min-width:320px) and (max-width:400px){
        margin:0 auto !important;
        margin-top:108% !important;
        margin-left: 0% !important;
        position:absolute;
        font-size: 20px;
        width:180px;
        height: 40px;
     }

    @media (min-width:400px) and (max-width:450px){
        margin:0 auto !important;
        margin-top:95% !important;
        position:absolute;
        font-size: 20px;
        width:180px;
        height: 40px;
     }

     @media (min-width:450px) and (max-width:550px){
        margin:0 auto !important;
        margin-top:87% !important;
        position:absolute;
        font-size: 20px;
        width:180px;
        height: 40px;
     }
 


    @media (min-width:550px) and (max-width:1000px) {
            margin:0 auto !important;
            width:180px;
            height:40px;
            font-size:30px;
            margin-top:85% !important;
            position:absolute;
            width:280px;
            height:70px;
        }
     
      @media(min-width:1000px) and (max-width:1100px){
         margin-left:-20% !important;
      }

      @media(min-width:1100px) and (max-width:1300px){
         margin-left:-20% !important;
         margin-top:0% !important;
      }

     @media (min-width:1300px) and (max-width:1600px){
      margin-left: -20% !important;
     }

     @media (min-width:2000px){
      margin-top:0% !important;
      margin-left:54% !important;
      width:400px;
      height:120px
      }
     
 


`

export default StyledButton
