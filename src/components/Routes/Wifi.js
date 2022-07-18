import { IoWifi } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";
import DataInfo from "../Layout/DataInfo";

export default function Wifi() {
    const { id } = useParams();
    const dataFormat = {
        name: "Nome",
        password: "Senha",
    };

    if (parseInt(id) !== 0) {
        return <DataInfo
        title="Wifi"
        path="wifi"
        dataFormat={dataFormat}
    />;
    } else {
        return <Datas title="Wifi" icon={<IoWifi />} path="wifi" />;
    }
}
