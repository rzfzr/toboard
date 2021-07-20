import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return <header>
        <div>toboard</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'> Favorites</Link>
                </li>
                <li>
                    <Link to='/goals'> Goals</Link>
                </li>
            </ul>
        </nav>

    </header>
}