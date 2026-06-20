export default function Modal(props) {
    const { exercise, handleCloseModal } = props

    return (
        <div className="modal-container">
            <button className="modal-underlay" onClick={handleCloseModal}></button>

            <div className="modal-content">
                <div>
                    <h4>Name</h4>
                    <h2>{exercise.name}</h2>
                </div>

                <div>
                    <h4>Description</h4>
                    <p>{exercise.description || "No description available."}</p>
                </div>
            </div>
        </div>
    )
}