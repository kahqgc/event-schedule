import ScheduleRow from "../components/ScheduleRow";
import PopUp from "../components/PopUp";
import { masterSchedule } from "../data/dummyData";
import { useState } from "react";
import "./Schedule.css";

export default function Schedule() {
  const [scheduledEvent, setScheduledEvent] =
    useState(null); /*indicates no scheduled event selected */

  //dynamically get stage names from dummy data
  const stages = masterSchedule.reduce((acc, slot) => {
    slot.sessions.forEach((session) => {
      if (!acc.includes(session.stage)) {
        acc.push(session.stage);
      }
    });
    return acc;
  }, []);

  return (
    <>
      <h2 className="schedule-heading">Event Times</h2>
      <section className="schedule-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              {stages.map((stage) => (
                <th key={stage}>{stage}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {masterSchedule.map((slot) => {
              return (
                <ScheduleRow
                  key={slot.time} //unique ID based on time which is how the rows will lay on the page
                  slot={slot} /*passing the full slot object  */
                  stages={stages} /*pass new stages array made by .reduce*/
                  setScheduledEvent={setScheduledEvent} //send setter to child
                />
              );
            })}
          </tbody>
        </table>
        {scheduledEvent && (
          <PopUp
            scheduledEvent={scheduledEvent}
            onClose={() => setScheduledEvent(null)}
          />
        )}
      </section>
    </>
  );
}

/*https://www.youtube.com/watch?v=Gy4G68WoHq4&t=781s how I learned to create a pop up box using useState */
