export default function Modal(props) {
    const { exercise, handleCloseModal } = props

    if (!exercise) {
        return null
    }

    return (
        <div className="modal-container">
            <button
                className="modal-underlay"
                onClick={handleCloseModal}
                type="button"
            ></button>

            <div className="modal-content">
                <button
                    className="modal-close"
                    onClick={handleCloseModal}
                    type="button"
                >
                    ×
                </button>

                <div className="modal-section">
                    <h4>Name</h4>
                    <h2>{exercise.name}</h2>
                </div>

                <div className="modal-section">
                    <h4>Description</h4>
                    <p>{exercise.description}</p>
                </div>
            </div>
        </div>
    )
}