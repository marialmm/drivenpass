import PopUp from "./PopUp";

export default function SignupErrorPopUp({popUp, setPopUp, children}){
    return(
        <PopUp popUp={popUp} setPopUp={setPopUp}>
            <p>Cadastro inválido!</p>
            <p>Email já cadastrado! Vá para a página de login ou insira outro email.</p>
            <button onClick={()=> setPopUp(false)}>Ok</button>
        </PopUp>
    )
}