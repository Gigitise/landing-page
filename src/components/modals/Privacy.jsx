import "./modals.css";

const Privacy = ({closeModal}) => {
    return (
        <div className="modal-container">
            <button onClick={closeModal} className="close-button">X</button>
            <h1 className="modal-title">Gigitise</h1>
            <h2>Privacy Policy</h2>
            <p>Last updated: Feb 07, 2024</p>
            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy is maintained by the Privacy Policy Generator.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices facilisis. Vestibulum porta velit at elementum elementum.</p>
            <p>Maecenas et massa auctor, convallis libero sed, placerat mauris. Suspendisse vitae tellus eget arcu pretium dictum.</p>
            <p>Curabitur a purus vel augue ultrices ultricies id nec lorem. Nulla facilisi.</p>
        </div>
    );
};
export default Privacy;
