import { Button } from '@material-ui/core';

interface Prop {
    color: string;
    isRunning: boolean;
}

const ToggleFunction = () => {
    alert('toggled')
}
export default function Toggle(props: Prop) {
    const message = props.isRunning ? 'Stop' : 'Play';
    return (
        <Button onClick={ToggleFunction} variant="contained">{message}
        </Button>
    )
}