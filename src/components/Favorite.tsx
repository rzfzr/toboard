import { Favorite } from '../typings/my-types'
import Toggle from './Toggle'

export default function FavoriteComponent(props: { favorite: Favorite }) {
    return (
        <Toggle entry={props.favorite} showLabel={true} />
    )
}