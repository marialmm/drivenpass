import { IoLogIn } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";
import DataInfo from "../Layout/DataInfo";

export default function Credentials() {
    const { id } = useParams();
    const dataFormat = {
        url: "URL",
        username: "Usuário",
        password: "Senha",
    };

    if (parseInt(id) !== 0) {
        return <DataInfo title="Credenciais" path="credential" dataFormat={dataFormat} />;
    } else {
        return (
            <Datas title="Credenciais" icon={<IoLogIn />} path="credentials" />
        );
    }
}
