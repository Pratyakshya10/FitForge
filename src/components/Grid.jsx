import { useEffect, useState } from "react"
import { workoutProgram as training_plan } from "../utils/index.js"
import WorkoutCard from "./WorkoutCard.jsx"

export default function Grid() {
    const [selectedWorkout, setSelectedWorkout] = useState(null)
    const [completedWorkouts, setCompletedWorkouts] = useState([])

    useEffect(() => {
        const savedCompletedWorkouts = localStorage.getItem("completedWorkouts")

        if (savedCompletedWorkouts) {
            setCompletedWorkouts(JSON.parse(savedCompletedWorkouts))
        }
    }, [])

    function handleCompleteWorkout(workoutIndex) {
        const updatedCompletedWorkouts = [...new Set([...completedWorkouts, workoutIndex])]

        setCompletedWorkouts(updatedCompletedWorkouts)
        localStorage.setItem("completedWorkouts", JSON.stringify(updatedCompletedWorkouts))
        setSelectedWorkout(null)
    }

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

                const isCompleted = completedWorkouts.includes(workoutIndex)

                if (workoutIndex === selectedWorkout) {
                    return (
                        <WorkoutCard
                            key={workoutIndex}
                            trainingPlan={trainingPlan}
                            workoutIndex={workoutIndex}
                            type={type}
                            dayNum={dayNum}
                            icon={icon}
                            closeWorkout={() => setSelectedWorkout(null)}
                            completeWorkout={() => handleCompleteWorkout(workoutIndex)}
                        />
                    )
                }

                return (
                    <button
                        className={`card plan-card ${isCompleted ? "completed" : ""}`}
                        key={workoutIndex}
                        onClick={() => setSelectedWorkout(workoutIndex)}
                    >
                        <div className="plan-card-header">
                            <p>Day {dayNum}</p>
                            {isCompleted ? (
                                <i className="fa-solid fa-check"></i>
                            ) : (
                                icon
                            )}
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