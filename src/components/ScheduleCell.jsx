export default function ScheduleCell({ setPopUp, getSession, stageName }) {
  const session = getSession(stageName);
  return (
    <button onClick={() => {
      setPopUp(session);
    }}>
      {session ? session.title : ""}
    </button>
  )
}