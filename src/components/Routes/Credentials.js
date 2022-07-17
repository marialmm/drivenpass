import { IoLogIn } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";

export default function Credentials() {
    const { id } = useParams();

    if (parseInt(id) !== 0) {
        return <h1>Credencial {id}</h1>;
    } else {
        return (
            <Datas title="Credenciais" icon={<IoLogIn />} path="credentials" />
        );
    }
}
