import Progress from './Progress'
// import Toggle from './Toggle'


export default function Goal() {
    return (
        <div>
            <Progress isRunning={true} value={10} color={'red'} />
        </div>
    )
}