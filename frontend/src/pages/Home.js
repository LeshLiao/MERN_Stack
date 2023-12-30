import { useEffect, useState } from 'react'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import CardDetails from '../components/CardDetails'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('https://mern-stack-website.onrender.com/api/workouts')
            // const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json()

            if ( response.ok ) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <th>Time</th>
                    <th>ID</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    {
                        workouts && workouts
                        .sort((a,b) => a.createdAt > b.createdAt ? -1 : 1)
                        .map((d) => (
                            <CardDetails key={d._id} d={d} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home