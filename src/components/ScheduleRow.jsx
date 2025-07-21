import ScheduleCell from "./ScheduleCell";

export default function ScheduleRow({ slot, stages, setScheduledEvent }) {
  /*Helper function to find specific stage within the row timeslot*/
  function getSession(stage) {
    return slot.sessions.find((session) => session.stage === stage); /*find the session whose stage matches the stage passed in the function*/
  }

  return (
    <tr key={slot.time}>
      <th>{slot.time}</th>
      {stages.map((stage) => ( /*map through each stage in stages array to create a cell per stage*/
        <td key={stage}>
          <ScheduleCell
            stage={stage} /*pass stage as a prop*/
            getSession={getSession}
            setScheduledEvent={setScheduledEvent}
          />
        </td>
      ))}
    </tr>
  );
}
