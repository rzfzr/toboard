import { Link } from 'react-router-dom'
import classes from './NavigationBar.module.css'

export default function NavigationBar() {
    return <header className={classes.header}>
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