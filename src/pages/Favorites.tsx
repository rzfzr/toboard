import { Button } from '@material-ui/core'
import { useContext, useEffect } from 'react'
import Favorite from '../components/Favorite'
import NewFavorite from '../components/NewFavorite'
import { receiveFavorites, sendFavorites } from '../modules/firebaseClient'
import { TogglContext } from '../TogglContext'

export default function FavoritesPage() {
    const { favorites, setFavorites } = useContext(TogglContext)
    useEffect(() => {
        if (favorites.length === 0) {
            (async () => {
                setFavorites(await receiveFavorites())
            })()
        }
    }, [])
    console.log('Favorites:', favorites)
    return (
        <>
            {favorites.map(favorite =>
                <Favorite key={favorite.position} favorite={favorite} />
            )}
            <br />
            <NewFavorite />
            <br />
            <br />
            <Button
                onClick={() => { sendFavorites(favorites) }}
                size="large"
                variant="contained"
                color="primary"
            >
                Send favorites to database
            </Button>
        </>
    )
}