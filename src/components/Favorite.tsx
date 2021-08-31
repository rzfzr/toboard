import { Entry } from '../typings/my-types'
import Toggle from './Toggle'

interface Prop {
    entry: Entry;
}

export default function Favorite(props: Prop) {
    return (
        <div>
            <Toggle entry={props.entry} showLabel={true} />
        </div>
    )
}