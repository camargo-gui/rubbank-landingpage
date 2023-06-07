import React from "react"
import StyledButton  from "./index.style"


export default function DownloadButton(){
    return(
        <StyledButton id="appstore3">Baixe agora!</StyledButton>
    )
}

const link = document.getElementById("appstore3")
link?.addEventListener("click",redirecionar)
function redirecionar(){
    window.location.assign("https://www.apple.com/br/app-store/")
}