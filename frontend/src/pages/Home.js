import { useEffect, useState } from 'react'

// components
import WorkoutDetails from '../components/WorkoutDetails'

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
/*
    return (
        <div className="home">
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
*/
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
                        .map((d)=>(
                            <tr key={d._id}>
                                <td>{d.createdAt}</td>
                                <td>{d.card_id}</td>
                                <td>{d.card_data}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )


}
export default Home