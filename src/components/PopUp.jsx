import "./PopUp.css";
import AddANote from "./AddANote";

export default function PopUp({ scheduledEvent, onClose }) {

  const eventId =
    scheduledEvent.title.toLowerCase(); /*Added to make each saved note unique calling the ID the title of the event*/
  return (
    <div className={'pop-up-box'}>
      <button className="X" onClick={onClose}>
        X
      </button>
      <h1>{scheduledEvent.title}</h1>
      <p>{scheduledEvent.description}</p>
      <ul>
        <li>{scheduledEvent.host}</li>
        <li>{scheduledEvent.time}</li>
      </ul>
      <AddANote eventId={eventId} />
    </div>
  );
}
