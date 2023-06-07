import { useEffect } from "react";
import DownloadButton from "../DownloadButton";
import { Background, Botao, Texto, Titulo } from "./index.style";



export default function SobreNosSection() {
    return (
        <Background>
            <Titulo>Sobre Nós</Titulo>
            <Texto>Nascemos com a missão de oferecer a melhor experiência bancária para você.
                Aqui, acreditamos em descomplicar a relação com o dinheiro. Nosso objetivo é formar uma comunidade satisfeita e amiga de nossa empresa, por isso, nosso chat está sempre aberto para suas dúvidas, críticas e sugestões. Sinta-se em casa! No Rubbank, combinamos a conveniência digital com um atendimento humano e acolhedor. Estamos aqui para ser seu parceiro confiável em sua jornada financeira. Junte-se a nós e descubra uma nova forma de lidar com suas finanças.
                O Rubbank, é sobre você e sua satisfação.
                Seja bem-vindo ao Rubbank -
                seu banco para uma nova era financeira!</Texto>
            <Botao id="appstore2">Baixe agora!</Botao>
        </Background>
    )
}

const link = document.getElementById("appstore2")
link?.addEventListener("click",redirecionar)
function redirecionar(){
    window.location.assign("https://www.apple.com/br/app-store/")
}

