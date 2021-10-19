import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { Entry, Favorite } from '../typings/my-types';
import { Toggle } from './CustomClient';
interface Prop {
    entry: Entry | Favorite;
    showLabel?: boolean;
}

export default function ToggleComponent(props: Prop) {
    const [isRunning, setRunning] = React.useState(props.entry.isRunning);
    const [isClicked, setClicked] = React.useState(false)

    props.entry.isRunning = isRunning || false
    const handleClick = () => { setClicked(true) }

    useEffect(() => {
        if (!isClicked) return
        Toggle(props.entry);
        setClicked(false)
        setRunning(!props.entry.isRunning)
    }, [isClicked])

    return (
        <Button
            size="large"
            startIcon={isRunning ? <PauseCircleFilledIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
            variant="contained" color="primary" onClick={handleClick}>{props.entry.description}
        </Button>
    )
}