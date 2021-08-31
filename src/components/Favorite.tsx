import { Entry } from '../typings/my-types'
import Toggle from './Toggle'

export default function Favorite(props: { entry: Entry }) {
    return (
        <div>
            <Toggle entry={props.entry} showLabel={true} />
        </div>
    )
}