import Progress from './Progress'
import { Goal } from '../typings/my-types'
import ToggleComponent from './ToggleComponent'

export default function GoalComponent(props: { goal: Goal }) {
    return (
        <div>
            <Progress isRunning={true} value={10} color={'red'} />
            <ToggleComponent entry={props.goal} showLabel={true} />
        </div>
    )
}