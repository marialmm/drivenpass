import { IoWifi } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";

export default function Wifi(){
    const { id } = useParams();

    if (parseInt(id) !== 0) {
        return <h1>Wifi {id}</h1>;
    } else {
        return (
            <Datas title="Wifi" icon={<IoWifi />} path="wifi" />
        );
    }
}