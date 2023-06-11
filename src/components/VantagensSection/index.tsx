import { useEffect } from "react";
import { Background, Card, DivCards, DivTexto, TextoCard, TextoVantagens, TextoVantagensBold, TituloCard } from "./index.style";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function VantagensSection() {
    useEffect(()=>{
        Aos.init({duration:1500})
    },[])
    return (
        <Background>
            <DivTexto>
                <TextoVantagens>E AS <TextoVantagensBold>VANTAGENS</TextoVantagensBold> NÃO ACABAM...</TextoVantagens>
            </DivTexto>
            <DivCards>
                <Card data-aos="flip-left">
                    <TituloCard>DADOS<br></br>CRIPTOGRAFADOS</TituloCard>
                    <TextoCard>Segurança em primeiro lugar: Criptografia avançada para proteger suas informações!</TextoCard>
                </Card>
                <Card data-aos="flip-right">
                    <TituloCard>TRANSFERÊNCIAS AGENDADAS</TituloCard>
                    <TextoCard>Controle total: agende suas transferências de forma fácil, rápida e conveniente!</TextoCard>
                </Card>
                <Card data-aos="flip-left">
                    <TituloCard>VISÃO COMPLETA:</TituloCard>
                    <TextoCard>Explore nossos extratos detalhados para acompanhar todas as suas transações!</TextoCard>
                </Card>
                <Card data-aos="flip-right">
                    <TituloCard>SUPORTE AO SEU LADO</TituloCard>
                    <TextoCard>Conte conosco a qualquer hora, em qualquer emergência!</TextoCard>
                </Card>
            </DivCards>
        </Background>

    )
}
