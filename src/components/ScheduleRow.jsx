import ScheduleCell from "./ScheduleCell"

export default function ScheduleRow({ getSession, index, slot, setPopUp }) {
    return (
        <tr key={index}>
            <th>{slot.time}</th>
            <td>
                <ScheduleCell
                    stageName="Luna Stage"
                    getSession={getSession}
                    setPopUp={setPopUp} />
            </td>
            <td>
                <ScheduleCell
                    stageName="Eclipse Stage"
                    getSession={getSession}
                    setPopUp={setPopUp} />
            </td>
            <td>
                 <ScheduleCell 
                           stageName="The Flow Garden"
                           getSession={getSession}
                           setPopUp={setPopUp} />
            </td>
            <td>
                  <ScheduleCell 
                           stageName="The Sky Deck"
                           getSession={getSession}
                           setPopUp={setPopUp} />
            </td>
            <td>
                   <ScheduleCell 
                           stageName="The Bonfire"
                           getSession={getSession}
                           setPopUp={setPopUp} />
            </td>
        </tr>
    )
}