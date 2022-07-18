import { useNavigate } from "react-router-dom";

import PopUp from "./PopUp";

export default function GenericErrorPopUp({ error, setError }) {
    const navigate = useNavigate();
    return (
        <PopUp popUp={error} setPopUp={setError}>
            <p>Erro!</p>
            <p>Um erro aconteceu, tente novamente!</p>
            <button
                onClick={() => {
                    setError(false);
                    navigate("/");
                }}
            >
                Ok
            </button>
        </PopUp>
    );
}
