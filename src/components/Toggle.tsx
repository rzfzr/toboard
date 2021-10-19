import React from 'react';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { Entry, Favorite } from '../typings/my-types';
import { customClient } from '../modules/togglClient';
import { add } from '../modules/firebaseClient';
interface Prop {
    entry: Entry | Favorite;
    showLabel?: boolean;
}

function toggle(entry: Entry | Favorite) {
    console.log('toggling', entry.isRunning)
    customClient.toggle(entry);
    return !entry.isRunning

}
export default function Toggle(props: Prop) {
    const [isRunning, setRunning] = React.useState(props.entry.isRunning);
    props.entry.isRunning = isRunning || false
    const handleClick = () => { setRunning(toggle(props.entry)) }
    return (
        <Button
            size="large"
            startIcon={isRunning ? <PauseCircleFilledIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
            variant="contained" color="primary" onClick={handleClick}>{props.entry.description}
        </Button>
    )
}