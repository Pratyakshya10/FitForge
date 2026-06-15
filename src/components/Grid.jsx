import { useState } from 'react'
import { workoutProgram as training_plan } from '../utils/index.js'
import WorkoutCard from './WorkoutCard.jsx'

export default function Grid() {
    const [selectedWorkout, setSelectedWorkout] = useState(null)

    const isLocked = true

    return (
        <div className="training-grid-plan">
            {Object.keys(training_plan).map((workout, workoutIndex) => {
                const type =
                    workoutIndex % 3 === 0
                        ? 'Push'
                        : workoutIndex % 3 === 1
                        ? 'Pull'
                        : 'Legs'

                const trainingPlan = training_plan[workout]

                if (workoutIndex === selectedWorkout) {
                    return (
                        <WorkoutCard
                            key={workoutIndex}
                            trainingPlan={trainingPlan}
                        />
                    )
                }

                return (
                    <button
                        className={`card plan-card ${isLocked ? 'inactive' : ''}`}
                        key={workoutIndex}
                        disabled={isLocked}
                        onClick={() => {
                            if (!isLocked) {
                                setSelectedWorkout(workoutIndex)
                            }
                        }}
                    >
                        <div className="plan-card-header">
                            <p>
                                Day {(workoutIndex + 1 < 10)
                                    ? '0' + (workoutIndex + 1)
                                    : workoutIndex + 1}
                            </p>
                        </div>

                        {isLocked ? (
                            <i className="fa-solid fa-lock"></i>
                        ) : workoutIndex % 3 === 0 ? (
                            <i className="fa-solid fa-dumbbell"></i>
                        ) : workoutIndex % 3 === 1 ? (
                            <i className="fa-solid fa-weight-hanging"></i>
                        ) : (
                            <i className="fa-solid fa-bolt"></i>
                        )}

                        <div className="plan-card-header">
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}