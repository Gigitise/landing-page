import "./modals.css";

const Terms = ({closeModal}) => {
    return (
        <div className="modal-container">
            <button onClick={closeModal} className="close-button">X</button>
            <h1 className="modal-title">Gigitise</h1>
            <h2>Terms & Conditions</h2>
            <p>Last updated: Feb 07, 2024</p>
            <p>Please read these terms and conditions carefully before using Our Service.</p>
            <h1>Interpretation and Definitions</h1>
            <h3>Interpretation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices facilisis. Vestibulum porta velit at elementum elementum.</p>
            <p>Maecenas et massa auctor, convallis libero sed, placerat mauris. Suspendisse vitae tellus eget arcu pretium dictum.</p>
            <p>Curabitur a purus vel augue ultrices ultricies id nec lorem. Nulla facilisi.</p>
        </div>
    )
}
export default Terms;