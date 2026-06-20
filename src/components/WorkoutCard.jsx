import React, { useEffect, useState } from "react"
import Modal from "./Modal.jsx"
import { exerciseDescriptions } from "../utils/index.js"

export default function WorkoutCard(props) {
    const {
        trainingPlan,
        workoutIndex,
        type,
        dayNum,
        icon,
        closeWorkout,
        completeWorkout,
    } = props

    const { warmup = [], workout = [] } = trainingPlan || {}

    const [selectedExercise, setSelectedExercise] = useState(null)
    const [workoutData, setWorkoutData] = useState({})

    useEffect(() => {
        const savedWorkoutData = localStorage.getItem(
            `workoutData-${workoutIndex}`
        )

        if (savedWorkoutData) {
            setWorkoutData(JSON.parse(savedWorkoutData))
        }
    }, [workoutIndex])

    function handleWeightChange(exerciseKey, value) {
        setWorkoutData((prevData) => {
            return {
                ...prevData,
                [exerciseKey]: value,
            }
        })
    }

    function handleExerciseHelp(exercise) {
        const description =
            exerciseDescriptions[exercise.name] ||
            "No description available for this exercise yet."

        setSelectedExercise({
            ...exercise,
            description,
        })
    }

    function handleSaveAndExit() {
        localStorage.setItem(
            `workoutData-${workoutIndex}`,
            JSON.stringify(workoutData)
        )

        closeWorkout()
    }

    function handleComplete() {
        completeWorkout(workoutIndex, workoutData)
    }

    function renderExerciseRows(exercises, sectionName) {
        return exercises.map((exercise, exerciseIndex) => {
            const exerciseKey = `${sectionName}-${exerciseIndex}`

            return (
                <React.Fragment key={exerciseKey}>
                    <div className="exercise-grid">
                        <p>
                            {exerciseIndex + 1}. {exercise.name}
                        </p>

                        <button
                            className="help-icon"
                            onClick={() => handleExerciseHelp(exercise)}
                            type="button"
                            title="View exercise details"
                        >
                            <i className="fas fa-question-circle"></i>
                        </button>
                    </div>

                    <p className="exercise-info">{exercise.sets}</p>
                    <p className="exercise-info">{exercise.reps}</p>

                    <input
                        className="weight-input"
                        placeholder="N/A"
                        value={workoutData[exerciseKey] || ""}
                        onChange={(event) =>
                            handleWeightChange(exerciseKey, event.target.value)
                        }
                    />
                </React.Fragment>
            )
        })
    }

    return (
        <div className="workout-container">
            {selectedExercise && (
                <Modal
                    exercise={selectedExercise}
                    handleCloseModal={() => setSelectedExercise(null)}
                />
            )}

            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>

                <div className="plan-card-header">
                    <h2>
                        <b>{type} Workout</b>
                    </h2>
                </div>
            </div>

            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>

                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Max Weight</h6>

                {renderExerciseRows(warmup, "warmup")}
            </div>

            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Workout</h4>
                </div>

                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Max Weight</h6>

                {renderExerciseRows(workout, "workout")}
            </div>

            <div className="workout-buttons">
                <button type="button" onClick={handleSaveAndExit}>
                    Save & Exit
                </button>

                <button type="button" onClick={handleComplete}>
                    Complete
                </button>
            </div>
        </div>
    )
}