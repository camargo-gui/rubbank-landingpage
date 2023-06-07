import logoRoxa from "../../images/logoRoxa.png"
import { HeaderGeral, Hook, HookGroup, LogoHeader } from "./index.style"
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
    return (
        <HeaderGeral>
            <LogoHeader src={logoRoxa}></LogoHeader>
            <HookGroup>
                <Hook>Download</Hook>
                <Link to="vantagens">
                    <Hook> Vantagens</Hook>
                </Link>
                <Link to="sobrenos">
                    <Hook>Sobre nós</Hook>
                </Link>
                
            </HookGroup>
        </HeaderGeral >



    )
}

export default Header