import react from "react"
import Buttons from "./Buttons"
import Body from "./Body"

export default function InfoCard() {
    return (
        <div className="infocard">
            <h1 className="name">Chaithat Vanasrisawasd</h1>
            <h2 className="job-title">Incoming Software Engineer @ CashFlow Portal</h2>
            <h3 className="website">chaithatvanasrisawasd.website</h3>
            <Buttons />
            <Body />
        </div>
    )
}