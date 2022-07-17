import Modal from "react-modal";
import styled from "styled-components";

export default function PopUp({ popUp, setPopUp, children }) {
    return (
        <Modal
            isOpen={popUp}
            onRequestClose={() => setPopUp(false)}
            style={customStyles}
            ariaHideApp={false}
        >
            <Container>
                {children}
            </Container>
        </Modal>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;

    p {
        font-size: 18px;
        font-family: var(--font-family);
        width: 200px;
        text-align: center;
    }

    p:first-child {
        font-weight: 700;
    }

    button {
        background-color: var(--green);
        border: none;
        width: 250px;
        height: 40px;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
        border-radius: 5px;
        font-size: 18px;
    }
`;

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        width: "338px",
        height: "250px",
        border: "1px solid #DBDBDB",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};
