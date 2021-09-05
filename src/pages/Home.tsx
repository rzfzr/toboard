import { Link } from "react-router-dom";
export default function HomePage() {
    return <div> Welcome to toboard!
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
    </div>
}