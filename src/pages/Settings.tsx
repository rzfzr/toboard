import { Button } from '@material-ui/core'
import { useContext } from 'react'
import { sendProjects } from '../modules/firebaseClient'
import { TogglContext } from '../TogglContext'

export default function SettingsPage() {
    const { entries, projects } = useContext(TogglContext)
    return <>
        <h1>
            SettingsPage
        </h1>
        api/user = {process.env.REACT_APP_TOGGL_API}
        <span>
            <h5>Projects</h5>
            {projects.map(project =>
                <div key={project.id}>{project.name} - {project.id}</div>
            )}
            <Button
                onClick={() => { sendProjects(projects) }}
                size="large"
                variant="contained"
                color="primary"
            >
                Send Projects to database
            </Button>
        </span>
        <span>
            <h5>Entries</h5>
            {entries.map(entry =>
                <div key={entry.id}>{entry.description} - {entry.id}</div>
            )}
        </span>

    </>
}