import { Button } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

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
        <Button
            startIcon={<PlayCircleFilledIcon />}
            variant="contained" color="primary" onClick={ToggleFunction}>{message}
        </Button>
    )
}