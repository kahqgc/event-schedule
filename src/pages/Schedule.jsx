import './Schedule.css';

export default function Schedule() {
    return (
        <section className="schedule-container">
            <section className="full-schedule">
                <h2 className="schedule-heading">Event Times</h2>
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
                        <tr><th>9:00 AM</th>
                            <td>This is a test</td></tr>
                        <tr><th>10:00 AM</th></tr>
                        <tr><th>11:00 AM</th></tr>
                        <tr><th>12:00 PM</th></tr>
                        <tr><th>1:00 PM</th></tr>
                        <tr><th>2:00 PM</th></tr>
                        <tr><th>3:00 PM</th></tr>
                        <tr><th>4:00 PM</th></tr>
                        <tr><th>5:00 PM</th></tr>
                    </tbody>
                </table>
            </section>
            <section className="edit-schedule">
                <h2 className="schedule-heading">Your Events</h2>
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
                        <tr><th>9:00 AM</th></tr>
                        <tr><th>10:00 AM</th></tr>
                        <tr><th>11:00 AM</th></tr>
                        <tr><th>12:00 PM</th></tr>
                        <tr><th>1:00 PM</th></tr>
                        <tr><th>2:00 PM</th></tr>
                        <tr><th>3:00 PM</th></tr>
                        <tr><th>4:00 PM</th></tr>
                        <tr><th>5:00 PM</th></tr>
                    </tbody>
                </table></section>

        </section>
    )

}