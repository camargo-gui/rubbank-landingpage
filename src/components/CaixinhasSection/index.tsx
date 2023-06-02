import { AboutCaixinhas, Background, Checker, DivConteudo, Square, SquareText, Titulo, YellowMan } from "./index.style";
import HomemAmarelo from '../../images/homem-amarelo.png'
import checker from '../../images/marcador.png'


export default function CaixinhasSection() {
    return (
        <Background>
            <Checker src={checker}/>
            <DivConteudo>
                <AboutCaixinhas> <Titulo>CAIXINHAS</Titulo><br></br>Com as caixinhas você organiza seu dinheiro, e ainda recebe para isso!
                    Você pode escolher seu objetivo e selecionar o tempo que deixará seu
                    dinheiro guardado! 
                </AboutCaixinhas>
                <Square>
                    <SquareText>Esse é o total que as caixinhas já renderam:</SquareText>
                    <SquareText>R$2.986.231,90</SquareText>
                </Square>
            </DivConteudo>
            <YellowMan src={HomemAmarelo} />
        </Background>

    )
}