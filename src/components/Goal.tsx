import Progress from './Progress'

// interface Prop {
//     value: number;
// }
function Goal() {
    return (
        <div>
            <Progress value={10} color={'red'} />
            <Progress value={20} color={'blue'} />
            <Progress value={30} color={'green'} />
        </div>
    )
}
export default Goal;