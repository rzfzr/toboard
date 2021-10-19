
import { useContext } from 'react'
import { TogglContext } from '../TogglContext'

export default function SettingsPage() {
    const { entries, projects } = useContext(TogglContext)
    return <>
        <h3>
            SettingsPage
        </h3>
        <span>
            <h5>Projects</h5>
            {projects.map(project =>
                <div>{project.name} - {project.id}</div>
            )}
        </span>
        <span>
            <h5>Entries</h5>
            {entries.map(entry =>
                <div>{entry.description} - {entry.id}</div>
            )}
        </span>

    </>
}