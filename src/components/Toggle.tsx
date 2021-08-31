import React from 'react';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
interface Prop {
    color: string;
    isRunning: boolean;
}

function toggle(isRunning: boolean) {
    console.log('toggling', isRunning)
    return !isRunning

    // entryDescription, projectID) {
    // console.log('Togglying: ', entryDescription, projectID);
    // this.$toggl.getCurrentTimeEntry((err, timeEntry) => {
    //     if (err) console.log(err);
    //     else {
    //         if (timeEntry) {
    //             console.log("Something already running: ", timeEntry.description, timeEntry.pid);
    //             console.log("Checking if it is:", entryDescription, projectID);
    //             if (timeEntry.pid == projectID && timeEntry.description == entryDescription) {
    //                 console.log('Matched! Stopping');
    //                 this.stopEntry(timeEntry.id)
    //             } else {
    //                 console.log('Not Matched! Starting new');
    //                 this.createEntry(entryDescription, projectID);
    //             }
    //         } else {
    //             console.log("Nothing running! Starting new");
    //             this.createEntry(entryDescription, projectID);
    //         }
    //     }
    // });
}
export default function Toggle(props: Prop) {
    const [isRunning, setRunning] = React.useState(false);

    const status = isRunning ? 'Stop' : 'Play';
    const handleClick = () => { setRunning(toggle(isRunning)) }

    return (
        <Button
            size="large"
            startIcon={isRunning ? <PauseCircleFilledIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
            variant="contained" color="primary" onClick={handleClick}>{status}
        </Button>
    )
}