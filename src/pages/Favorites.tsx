import { useContext } from 'react'
import Favorite from '../components/Favorite'
import NewFavorite from '../components/NewFavorite'
import { TogglContext } from '../TogglContext'

export default function FavoritesPage() {
    const { favorites } = useContext(TogglContext)
    console.log('hi', favorites)

    return (
        <>
            Favorites
            {favorites.map(favorite => <div>
                <h5>{favorite.description} </h5>
                {/* <Favorite entry={favorite} /> */}
            </div>)}
            <br />
            <NewFavorite />
        </>
    )
}