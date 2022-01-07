import react from "react"
import FbLogo from "../images/fblogo.png"
import IgLogo from "../images/iglogo.png"
import GhLogo from "../images/ghlogo.png"



export default function Footer() {
    return (
        <div className="socials--footer">
            <a href="http://facebook.com" target="_blank"><img className='social' src={FbLogo} /></a>
            <a href="http://instagram.com/homcv" target="_blank"><img className='social' src={IgLogo} /></a>
            <a href="http://github.com/hom-cv" target="_blank"><img className='social' src={GhLogo} /></a>
        </div>
    )
}
