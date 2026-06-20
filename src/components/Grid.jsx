import { useState } from "react"
import { workoutProgram as training_plan } from "../utils/index.js"
import WorkoutCard from "./WorkoutCard.jsx"

export default function Grid() {
    const [selectedWorkout, setSelectedWorkout] = useState(null)

    return (
        <div className="training-grid-plan">
            {Object.keys(training_plan).map((workout, workoutIndex) => {
                const type =
                    workoutIndex % 3 === 0
                        ? "Push"
                        : workoutIndex % 3 === 1
                        ? "Pull"
                        : "Legs"

                const trainingPlan = training_plan[workout]

                const dayNum =
                    workoutIndex + 1 < 10
                        ? "0" + (workoutIndex + 1)
                        : workoutIndex + 1

                const icon =
                    workoutIndex % 3 === 0 ? (
                        <i className="fa-solid fa-dumbbell"></i>
                    ) : workoutIndex % 3 === 1 ? (
                        <i className="fa-solid fa-weight-hanging"></i>
                    ) : (
                        <i className="fa-solid fa-bolt"></i>
                    )

                if (workoutIndex === selectedWorkout) {
                    return (
                        <WorkoutCard
                            key={workoutIndex}
                            trainingPlan={trainingPlan}
                            type={type}
                            dayNum={dayNum}
                            icon={icon}
                            workoutIndex={workoutIndex}
                            closeWorkout={() => setSelectedWorkout(null)}
                        />
                    )
                }

                return (
                    <button
                        className="card plan-card"
                        key={workoutIndex}
                        onClick={() => setSelectedWorkout(workoutIndex)}
                    >
                        <div className="plan-card-header">
                            <p>Day {dayNum}</p>
                            {icon}
                        </div>

                        <h4>
                            <b>{type}</b>
                        </h4>
                    </button>
                )
            })}
        </div>
    )
}