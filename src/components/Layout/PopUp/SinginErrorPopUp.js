import PopUp from "./PopUp";

export default function SigninErrorPopUp({ popUp, setPopUp }) {
    return (
            <PopUp popUp={popUp} setPopUp={setPopUp}>
                <p>Login Inválido!</p>
                <p>
                    Confira o seu nome de usuário e senha para validar o seu
                    acesso.
                </p>
                <button onClick={() => setPopUp(false)}>Ok</button>
            </PopUp>
    );
}