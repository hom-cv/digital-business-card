import react from "react"
import Inlogo from "../images/inlogo.png"
import Maillogo from "../images/maillogo.jpg"


export default function Buttons() {
    return (
        <div className="buttons">
            <button onClick={emailButton} className="button--email">
                <img src={Maillogo} width="13px"/>
                Email</button>
            <button onClick={linkedinButton} className="button--linkedin">
                <img src={Inlogo} width="13px"/>
                LinkedIn</button>
        </div>
    )
}

function emailButton() {
    window.open('mailto:chaithatvanasrisawasd@gmail.com')
}

function linkedinButton() {
    window.open(
        "https://www.linkedin.com/in/chaithat-vanasrisawasd-89b55b16a",
        '_blank'
    )
}
