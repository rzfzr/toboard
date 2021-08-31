import { useContext } from 'react'
import Favorite from '../components/Favorite'
import NewFavorite from '../components/NewFavorite'
import { TogglContext } from '../TogglContext'

export default function FavoritesPage() {
    const { entries } = useContext(TogglContext)
    console.log('hi', entries)
    return (
        <>
            Favorites
            {entries.map(entry => <div>
                <Favorite entry={entry} />
            </div>)}
            <br />
            <NewFavorite />
        </>
    )
}