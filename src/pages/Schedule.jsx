import './Schedule.css';
import { masterSchedule } from '../data/dummyData';
import PopUp from "../components/PopUp";
import {useState} from "react";
import ScheduleRow from '../components/ScheduleRow';

export default function Schedule() {
    const [popUp, setPopUp] = useState(null); /*indicates pop up is closed */
    return (
        <>
            <h2 className="schedule-heading">Event Times</h2>
            <section className="schedule-container">
                <table className="schedule-table">
                    <thead>
                        <tr>

                            <th>Time</th>
                            <th>Luna Stage</th>
                            <th>Eclipse Stage</th>
                            <th>The Flow Garden</th>
                            <th>The Sky Deck</th>
                            <th>The Bonfire</th>
                        </tr>
                    </thead>
                    <tbody>
                        {masterSchedule.map((slot, index) => {

                            /*Helper */
                            function getSession(stage) {
                                return slot.sessions.find(session => session.stage === stage)
                            }
                            return (
                                <ScheduleRow key={index} slot={slot} getSession={getSession} setPopUp={setPopUp} />
                            );
                        })}

                    </tbody>
                </table>
                {popUp && (<PopUp scheduledEvent={popUp} onClose={() => setPopUp(null)} />)}
            </section>
        </>
    )

}

/*https://www.youtube.com/watch?v=Gy4G68WoHq4&t=781s how I learned to create a pop up box using useState */