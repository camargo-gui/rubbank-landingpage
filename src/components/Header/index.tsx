import logoRoxa from "../../images/logoRoxa.png"
import { HeaderGeral, Hook, HookGroup, LogoHeader } from "./index.style"
import { Link, animateScroll as scroll } from 'react-scroll';


function Header() {
    return (
        <HeaderGeral>
            <LogoHeader src={logoRoxa}></LogoHeader>
            <HookGroup>
                <Hook onClick={redirecionar}>Download</Hook>
                <Link to="vantagens" smooth={true}>
                    <Hook> Vantagens</Hook>
                </Link>
                <Link to="sobrenos" smooth={true}>
                    <Hook>Sobre nós</Hook>
                </Link>
            </HookGroup>
        </HeaderGeral >
    )
}

function redirecionar() {
    window.open("https://www.apple.com/br/app-store/")
}


export default Header