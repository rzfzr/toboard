import { useContext } from 'react'
import Entry from '../components/Entry'
import NewEntry from '../components/NewEntry'
import { TogglContext } from '../TogglContext'

export default function FavoritesPage() {
    const { entries } = useContext(TogglContext)
    return (
        <>
            Favorites
            {entries.map(entry => <div>
                <Entry name={entry.description} />
            </div>)}
            <br />
            <NewEntry />
        </>
    )
}