import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { Entry, Favorite, Goal } from '../typings/my-types';
import { Toggle } from '../modules/CustomClient';

import { useContext } from 'react'
import { TogglContext } from '../TogglContext'

interface Prop {
    entry: Entry | Favorite | Goal;
    showLabel?: boolean;
}

export default function ToggleComponent(props: Prop) {
    const [isRunning, setRunning] = React.useState(props.entry.isRunning);
    const { currentEntry, setCurrentEntry } = useContext(TogglContext)

    props.entry.isRunning = isRunning || false
    const handleClick = () => {
        setRunning(!props.entry.isRunning)
        Toggle(props.entry, setCurrentEntry);
    }

    useEffect(() => {
        if (!currentEntry) return
        setRunning(currentEntry.description === props.entry.description)//todo add project checking aswell
    }, [currentEntry, props.entry.description])

    return (
        <Button
            size="large"
            startIcon={isRunning ? <PauseCircleFilledIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
            variant="contained" color="primary" onClick={handleClick}>{props.entry.description}
        </Button>
    )
}