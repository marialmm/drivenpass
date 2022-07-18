import { HiIdentification } from "react-icons/hi";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";
import DataInfo from "../Layout/DataInfo";

export default function Documents() {
    const { id } = useParams();
    const dataFormat = {
        fullName: "Nome Completo",
        number: "Número",
        emissionDate: "Data de emissão",
        validateDate: "Data de validade",
        issuingAgency: "Órgão emissor",
        type: "Tipo",
    };

    if (parseInt(id) !== 0) {
        return (
            <DataInfo
                title="Documentos"
                path="document"
                dataFormat={dataFormat}
            />
        );
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
