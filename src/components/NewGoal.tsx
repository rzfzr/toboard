import { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TogglContext } from '../TogglContext';
import { sendGoals } from '../modules/firebaseClient';

export default function NewGoal(props: any) {
    const [description, setDescription] = useState('')
    const [project, setProject] = useState('')
    const [target, setTarget] = useState('')
    const { goals, setGoals } = useContext(TogglContext)

    const [isEditing, setEditing] = useState(false)
    if (isEditing) {
        return (
            <>
                <Paper>
                    <h4>New Weekly Goal</h4>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="description"
                            label="Description"
                            onChange={(event) => setDescription(event.target.value)}
                            placeholder=""
                            variant="outlined" />
                        <TextField
                            id="project"
                            label="Project"
                            onChange={(event) => setProject(event.target.value)}
                            placeholder=""
                            variant="outlined" />
                        <TextField
                            id="target"
                            label="Target in minutes"
                            onChange={(event) => setTarget(event.target.value)}
                            placeholder=""
                            variant="outlined" />
                    </form>
                    <ButtonGroup
                        variant="text"
                        color="primary"
                        aria-label="text primary button group">
                        <Button
                            onClick={() => {
                                const goal: any = { description: description, project: project, position: goals.length, target: target }
                                sendGoals([goal])
                                setGoals([...goals, goal])
                                setEditing(false)
                            }}>Save</Button>
                        <Button
                            onClick={() => setEditing(false)}>Cancel</Button>
                    </ButtonGroup>
                </Paper>
            </>
        )
    } else
        return (
            <Button
                startIcon={<AddIcon fontSize="large" />}
                onClick={() => setEditing(true)}
                size="large"
                variant="contained"
                color="primary"
            >
                New Weekly Goal
            </Button>
        )
}