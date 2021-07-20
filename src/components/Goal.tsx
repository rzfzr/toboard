import Progress from './Progress'

// interface Prop {
//     value: number;
// }
function Goal() {
    return (
        <div>
            <Progress isRunning={true} value={10} color={'red'} />
            <Progress isRunning={false} value={20} color={'blue'} />
        </div>
    )
}
export default Goal;