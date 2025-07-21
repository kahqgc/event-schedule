export default function ScheduleCell({ setScheduledEvent, getSession, stage }) {
  const session =
    getSession(
      stage
    ); /*find the session that corresponds with particular stage and timeslot */
  return (
    <button
      onClick={() => {
        setScheduledEvent(
          session
        ); /*when clicked, tell schedule.jsx which session was clicked*/ 
      }}
    >
      {session ? session.title : ""}
    </button>
  );
}
