import Progress from './Progress'
import Toggle from './Toggle'


function Goal() {
    return (
        <div>
            <Progress isRunning={true} value={10} color={'red'} />
            <Toggle color={'red'} isRunning={true} />
        </div>
    )
}
export default Goal;