import "./style.css"
import phone from "../../images/celular.png"
import shadow from "../../images/sombra.png"
import DownloadButton from "../DownloadButton"
import { BtnDownload, PhoneCompleto, PhoneImg, Shadow } from "./index.style"

export default function Phone(){
    return(
        
        <PhoneCompleto>
            <PhoneImg src={phone}></PhoneImg>
            <Shadow src={shadow}></Shadow>
            {/* <BtnDownload>
                <DownloadButton></DownloadButton>
            </BtnDownload> */}
        </PhoneCompleto>
    )

}