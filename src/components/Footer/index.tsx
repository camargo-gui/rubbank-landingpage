import { Body, Disponivel, DivLogos, Logo, Rubbank } from "./index.style";
import appStore from "../../images/app-store.png";
import google from "../../images/playstore.png"


export default function Footer () {
    return (
        <Body>
            <Rubbank>Rubbank</Rubbank>
            <DivLogos>
                <Disponivel>Disponível em </Disponivel>
                        <Logo src={appStore}/>
                        <Logo src={google}/>
            </DivLogos>
            

        </Body>
    )
}

