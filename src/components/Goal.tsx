import Progress from './Progress'
import Toggle from './Toggle'


function Goal() {
    return (
        <div>
            <Progress isRunning={true} value={10} color={'red'} />
            <Toggle isRunning={false} color={'red'} />
        </div>
    )
}
export default Goal;