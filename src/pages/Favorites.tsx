import { useContext } from 'react'
import Favorite from '../components/Favorite'
import NewFavorite from '../components/NewFavorite'
import { TogglContext } from '../TogglContext'

export default function FavoritesPage() {
    const { favorites } = useContext(TogglContext)
    console.log('Favorites:', favorites)

    return (
        <>
            {favorites.map(favorite =>
                <Favorite key={favorite.position} favorite={favorite} />
            )}
            <br />
            <NewFavorite />
        </>
    )
}