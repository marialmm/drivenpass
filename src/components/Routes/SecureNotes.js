import { IoPencil } from "react-icons/io5";
import { useParams } from "react-router-dom";

import Datas from "../Layout/Datas";

export default function SecureNotes() {
    const { id } = useParams();

    if (parseInt(id) !== 0) {
        return <h1>Nota Segura {id}</h1>;
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
