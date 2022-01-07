import react from "react"
import Photograph from "../images/ProfilePhoto.jpg"

export default function ProfilePhoto() {
    return (
        <img src={Photograph} alt="Photo of Chaithat Vanasrisawasd" className="profile--photo"/>
    )
}