import { HiIdentification } from "react-icons/hi";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";

export default function Documents() {
    const { id } = useParams();

    if (parseInt(id) !== 0) {
        return <h1>Documento {id}</h1>;
    } else {
        return (
            <Datas
                title="Documentos"
                icon={<HiIdentification />}
                path="documents"
            />
        );
    }
}
