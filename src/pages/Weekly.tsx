import { useContext } from 'react'
import Goal from '../components/Goal'
import NewGoal from '../components/NewGoal'
import { TogglContext } from '../TogglContext'


export default function WeeklyPage() {
    const { goals } = useContext(TogglContext)
    console.log('Goals:', goals)
    return (
        <>
            {goals.map(goal =>
                <Goal key={goal.position} goal={goal} />
            )}
            <br />
            <NewGoal />
        </>
    )
}