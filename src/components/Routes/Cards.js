import { IoWallet } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";

export default function Cards() {
    const { id } = useParams();

    if (parseInt(id) !== 0) {
        return <h1>Cartão {id}</h1>;
    } else {
        return (
            <Datas title="Cartões" icon={<IoWallet />} path="cards" />
        );
    }
}
