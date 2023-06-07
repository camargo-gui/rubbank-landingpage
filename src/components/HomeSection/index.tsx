import Phone from "../Phone"
import cadeado from "../../images/seguranca.png"
import relogio from "../../images/relogio.png"
import cofrinho from "../../images/cofrinho.png"
import "./import.css"
import { Bank, BodyHome, BodyTexts, Icons, Rub, SmallIcon, Subtitle, TextIcon, Title, Topic } from "./index.style"
import DownloadButton from "../DownloadButton"



export default function Home() {

    const width = window.screen.width
    if(width>900&&width<2000){
        return (
            <div>
                <BodyHome>
                    <Phone></Phone>
                    <BodyTexts>
    
                        <Title>
                            <Rub>Rub</Rub><Bank>bank</Bank>
                        </Title>
                        <Subtitle>Faça transferências e rendimentos em um só lugar!</Subtitle>
    
                        <Icons>
                            <Topic>
                                <SmallIcon src={cadeado}></SmallIcon>
                                <TextIcon>Segurança</TextIcon>
                            </Topic>
                            <Topic>
                                <SmallIcon src={cofrinho}></SmallIcon>
                                <TextIcon>Rentabilidade</TextIcon>
                            </Topic>
                            <Topic>
                                <SmallIcon src={relogio}></SmallIcon>
                                <TextIcon>Praticidade</TextIcon>
                            </Topic>
                        </Icons>
    
                        <DownloadButton></DownloadButton>
                    </BodyTexts>
                    
                </BodyHome>

    
            </div>
            )
    }
    else{
        return(
            <BodyHome>
                    <Phone></Phone>
                    <BodyTexts>
    
                        <Title>
                            <Rub>Rub</Rub><Bank>bank</Bank>
                        </Title>
                        
    
                        <Icons>
                            <Topic>
                                <SmallIcon src={cadeado}></SmallIcon>
                                <TextIcon>Segurança</TextIcon>
                            </Topic>
                            <Topic>
                                <SmallIcon src={cofrinho}></SmallIcon>
                                <TextIcon>Rentabilidade</TextIcon>
                            </Topic>
                            <Topic>
                                <SmallIcon src={relogio}></SmallIcon>
                                <TextIcon>Praticidade</TextIcon>
                            </Topic>
                        </Icons>
                        
                    </BodyTexts>
                    <Subtitle>Faça transferências e rendimentos em um só lugar!</Subtitle>
                    <DownloadButton></DownloadButton>
                </BodyHome>
    
        )
    }
    




}
