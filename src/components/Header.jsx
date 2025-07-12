import { Link } from "react-router";
import "./Header.css";

export default function Header() {
    return(
        <nav className="header">
            <Link to="/">Home</Link>
            <Link to="/pages/About">About</Link>
            <Link to="/pages/Schedule">Event Schedule</Link>
        </nav>
    )

}