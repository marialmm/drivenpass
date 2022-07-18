import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../assets/contexts/userContext";
import { api } from "../../../utils/api";
import PopUp from "./PopUp";

export default function DeletePopUp({ deletePopUp, setDeletePopUp, setError, path }) {
    const {id} = useParams();
    const navigate = useNavigate();
    const {header} = useContext(UserContext);

    function deleteData(){
        const promise = api.delete(`/${path}/${parseInt(id)}`, header);
        promise.then(()=>{
            setDeletePopUp(false);
            navigate(-1);
        });
        promise.catch((err) => {
            console.log(err.response.data);
            setDeletePopUp(false);
            setError(true);
        })
    }

    return (
        <PopUp popUp={deletePopUp} setPopUp={setDeletePopUp}>
            <p>Deletar registro</p>
            <p>Tem certeza que deseja deletar o registro?</p>
            <button onClick={deleteData}>Sim</button>
            <button onClick={()=>setDeletePopUp(false)}>Não</button>
        </PopUp>
    );
}
