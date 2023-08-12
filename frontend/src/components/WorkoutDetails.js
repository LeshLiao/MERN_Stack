const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workout-details">
            <p><strong>Card ID:</strong> {workout.card_id}</p>
            <p>Card Data: {workout.card_data}</p>
            <p>Time: {workout.createdAt}</p>
        </div>
    );
};
export default WorkoutDetails