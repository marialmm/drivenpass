import { IoPencil } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";
import DataInfo from "../Layout/DataInfo";

export default function SecureNotes() {
    const { id } = useParams();
    const dataFormat = {
        note: "Nota",
    };

    if (parseInt(id) !== 0) {
        return (
            <DataInfo
                title="Notas Seguras"
                path="securenote"
                dataFormat={dataFormat}
            />
        );
    } else {
        return (
            <Datas
                title="Notas Seguras"
                icon={<IoPencil />}
                path="securenotes"
            />
        );
    }
}
