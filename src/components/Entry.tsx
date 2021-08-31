import Toggle from './Toggle'

interface Prop {
    name: string;
    isRunning?: boolean;
}

function Entry(props: Prop) {
    return (
        <div>
            <Toggle isRunning={false} label={props.name} />
        </div>
    )
}
export default Entry;