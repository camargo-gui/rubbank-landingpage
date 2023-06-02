import logoRoxa from "../../images/logoRoxa.png"
import { HeaderGeral, Hook, HookGroup, LogoHeader } from "./index.style"

function Header() {
    return (
        <HeaderGeral>
            <LogoHeader src={logoRoxa}></LogoHeader>
            <HookGroup>
                <Hook>Download</Hook>
                <Hook> Vantagens</Hook>
                <Hook>Sobre nós</Hook>
            </HookGroup>
        </HeaderGeral >



    )
}

export default Header