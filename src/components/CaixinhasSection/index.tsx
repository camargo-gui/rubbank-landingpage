import { AboutCaixinhas, Background, Checker, DivConteudo, Square, SquareText, Titulo, YellowMan } from "./index.style";
import { useEffect } from "react";
import HomemAmarelo from '../../images/homem-amarelo.png'
import checker from '../../images/marcador.png'
import Aos from "aos";
import 'aos/dist/aos.css'


export default function CaixinhasSection() {
    useEffect(()=>{
        Aos.init({duration:500})
    },[])
    return (
        <Background>
            <Checker src={checker} />
            <DivConteudo>
                <AboutCaixinhas> <Titulo>CAIXINHAS</Titulo><br></br>Com as caixinhas você organiza seu dinheiro, e ainda recebe para isso!
                    Você pode escolher seu objetivo e selecionar o tempo que deixará seu
                    dinheiro guardado!
                </AboutCaixinhas>
                <Square data-aos="flip-left">
                    <SquareText>Esse é o total que as caixinhas já renderam juntas:</SquareText>
                    <SquareText>R$2.986.231,90</SquareText>
                </Square>
            </DivConteudo>
            <YellowMan src={HomemAmarelo} />
        </Background>


    )
}