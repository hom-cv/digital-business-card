import react from "react"
import FbLogo from "../images/fblogo.png"
import IgLogo from "../images/iglogo.png"
import GhLogo from "../images/ghlogo.png"



export default function Footer() {
    return (
        <div className="socials--footer">
            <a href="facebook.com"><img className='social' src={FbLogo} /></a>
            <a href="instagram.com/homcv"><img className='social' src={IgLogo} /></a>
            <a href="github.com"><img className='social' src={GhLogo} /></a>
        </div>
    )
}
