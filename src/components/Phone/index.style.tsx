import styled from 'styled-components'

export const PhoneCompleto = styled.div`
    text-align: center;
    margin-top: 8%;
    margin-left: 8%;
    width: 30%;
    height: 50%;

    @media (min-width:320px) and (max-width:400px){
        text-align: center;
        margin-top: 38%;
        margin-left: 8%;
        width: 80%;
        height: 50%;
    }
    
    @media (min-width:400px) and (max-width:450px){
            text-align: center;
            margin-top: 24%;
            margin-left: 8%;
            width: 70%;
            height: 50%;
    }

    @media (min-width:450px) and (max-width:550px){
        text-align: center;
        margin-top: 24%;
        margin-left: 12%;
        width: 60%;
        height: 50%;
}
        
    @media (min-width:500px) and (max-width:800px) {
        margin-left:6% ;
    }

    @media (min-width:1100px) and (max-width:1600px) {
        margin-top:3%;
    }

    @media (min-width:1900px) and (max-width:2090px){
        margin-top:3%;
        margin-left:12% ;
        width: 20%;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin-top: 8% !important;
      }

      @media (min-width:355px) and (max-width:365px){
        margin-top: 34%;
      }

      
  
`

export const PhoneImg = styled.img`

    width: 115%;
    height: auto;
    z-index: 1;
    position: relative;

    @media (max-width:450px){
            width: 140%;
            height: auto;
    }

    @media (min-width:500px) and (max-width:767px){
        width:150%
    }

    @media (min-width:768px) and (max-width:1000px){
        width:180%
    }

    @media (min-width:1200px) and (max-width:1500px){
        width:100%
    }

    @media (min-width:2000px){
        margin-top:-20%;
        width:70%
    }

    @media (min-width:355px) and (max-width:365px){
        width:155%;
    }
`

export const Shadow = styled.img`

    width: 100%;
    height: auto;
    margin-left: 20%;
    margin-top: -15%;
    z-index: 0;
    position: relative;

    @media (max-width:500px){
            width: 130%;
            height: auto;
            margin-left: 20%;
            margin-top: -15%;
        }
    @media (min-width:1200px) and (max-width:1500px){
        margin-left:8%;
    }

    @media (min-width:2000px){
        margin-left:10%;
        width:70%
    }
    

`

export const BtnDownload = styled.div`
    .phone-btn{
        margin-top: -2%;
        padding-left: 30%;
    }

    @media (min-width:800px) and (max-width:1100px) {
            margin-top: 5%;
            padding-left: 25%;
        }

    @media (max-width:400px){
            margin-top: 100%;
            padding-left: 75%;
        }
`
