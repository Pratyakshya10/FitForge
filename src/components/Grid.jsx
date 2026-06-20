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

    function saveCompletedWorkouts(updatedCompletedWorkouts) {
        setCompletedWorkouts(updatedCompletedWorkouts)
        localStorage.setItem(
            "completedWorkouts",
            JSON.stringify(updatedCompletedWorkouts)
        )
    }

    function handleCompleteWorkout(workoutIndex, workoutData) {
        localStorage.setItem(
            `workoutData-${workoutIndex}`,
            JSON.stringify(workoutData)
        )

        const updatedCompletedWorkouts = [
            ...new Set([...completedWorkouts, workoutIndex]),
        ]

        saveCompletedWorkouts(updatedCompletedWorkouts)
        setSelectedWorkout(null)
    }

    function handleResetProgress() {
        const confirmReset = window.confirm(
            "Are you sure you want to reset all workout progress?"
        )

        if (!confirmReset) return

        localStorage.clear()
        setCompletedWorkouts([])
        setSelectedWorkout(null)
    }

    const totalWorkouts = Object.keys(training_plan).length
    const completedCount = completedWorkouts.length
    const progressPercentage = Math.round((completedCount / totalWorkouts) * 100)

    return (
        <>
            <div className="progress-card card">
                <div>
                    <p>Progress</p>
                    <h3>
                        {completedCount}/{totalWorkouts} days completed
                    </h3>
                </div>

                <div className="progress-actions">
                    <p>{progressPercentage}%</p>
                    <button onClick={handleResetProgress}>Reset</button>
                </div>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

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

                    const isCompleted = completedWorkouts.includes(workoutIndex)

                    const isUnlocked =
                        workoutIndex === 0 ||
                        completedWorkouts.includes(workoutIndex - 1) ||
                        isCompleted

                    const icon = isCompleted ? (
                        <i className="fa-solid fa-check"></i>
                    ) : !isUnlocked ? (
                        <i className="fa-solid fa-lock"></i>
                    ) : workoutIndex % 3 === 0 ? (
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
                                workoutIndex={workoutIndex}
                                type={type}
                                dayNum={dayNum}
                                icon={icon}
                                closeWorkout={() => setSelectedWorkout(null)}
                                completeWorkout={handleCompleteWorkout}
                            />
                        )
                    }

                    return (
                        <button
                            className={`card plan-card ${
                                !isUnlocked ? "inactive" : ""
                            } ${isCompleted ? "completed" : ""}`}
                            key={workoutIndex}
                            disabled={!isUnlocked}
                            onClick={() => setSelectedWorkout(workoutIndex)}
                        >
                            <div className="plan-card-header">
                                <p>Day {dayNum}</p>
                                {icon}
                            </div>

                            <h4>
                                <b>{type}</b>
                            </h4>

                            {!isUnlocked && (
                                <small>Complete previous day first</small>
                            )}

                            {isCompleted && <small>Completed</small>}
                        </button>
                    )
                })}
            </div>
        </>
    )
}