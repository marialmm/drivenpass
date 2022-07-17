import PopUp from "./PopUp";

export default function GenericErrorPopUp({error, setError}){
    return (
        <PopUp popUp={error} setPopUp={setError}>
            <p>Erro!</p>
            <p>Um erro aconteceu, tente novamente!</p>
            <button onClick={()=>setError(false)}>Ok</button>
        </PopUp>
    )
}