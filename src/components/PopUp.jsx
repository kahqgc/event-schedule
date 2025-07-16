import "./PopUp.css";

export default function PopUp({ scheduledEvent, onClose }) {
    return (
        <div className="pop-up-box">
            <button className="X" onClick={onClose}>X</button>
            <h1>{scheduledEvent.title}</h1>
            <p>{scheduledEvent.description}</p>
            <ul>
                <li>{scheduledEvent.host}</li>
                <li>{scheduledEvent.time}</li>
            </ul>
            <button className="sign-up">Sign Up</button>
        </div>
    )
}