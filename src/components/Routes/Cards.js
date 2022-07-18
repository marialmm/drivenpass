import { IoWallet } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";
import DataInfo from "../Layout/DataInfo";

export default function Cards() {
    const { id } = useParams();
    const dataFormat = {
        number: "Número",
        name: "Nome",
        cvv: "Código de segurança",
        expirationDate: "Data de expiração",
        password: "Senha",
        type: "Tipo",
        isVirtual: "É virtural?",
    };

    if (parseInt(id) !== 0) {
        return (
            <DataInfo
                title="Cartões"
                path="card"
                dataFormat={dataFormat}
            />
        );
    } else {
        return <Datas title="Cartões" icon={<IoWallet />} path="cards" />;
    }
}
