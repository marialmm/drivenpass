import { useEffect, useState } from "react";

export default function DocumentInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    const [documentData, setDocumentData] = useState({
        fullName: "",
        emissionDate: "",
        issuingAgency: "",
        number: "",
        type: "rg",
        title: "",
        validateDate: "",
    });

    useEffect(() => {
        setNewData({...documentData});
        setUpdate(true);
    }, [documentData]);

    return update ? (
        <div>
            <label htmlFor="title">Título</label>
            <input
                type="text"
                name="title"
                value={documentData.title}
                onChange={(e) =>
                    setDocumentData({ ...documentData, title: e.target.value })
                }
                required
            />
            <label htmlFor="fullName">Nome Completo</label>
            <input
                type="text"
                name="fullName"
                value={documentData.fullName}
                onChange={(e) =>
                    setDocumentData({ ...documentData, fullName: e.target.value })
                }
                required
            />
            <label htmlFor="number">Número</label>
            <input
                type="text"
                name="number"
                value={documentData.number}
                onChange={(e) =>
                    setDocumentData({ ...documentData, number: e.target.value })
                }
                required
            />
            <label htmlFor="issuingAgency">Órgão emissor</label>
            <input
                type="text"
                name="issuingAgency"
                value={documentData.issuingAgency}
                onChange={(e) =>
                    setDocumentData({ ...documentData, issuingAgency: e.target.value })
                }
                required
            />
            <label htmlFor="emissionDate">Data de emissão</label>
            <input
                type="text"
                name="emissionDate"
                value={documentData.emissionDate}
                onChange={(e) =>
                    setDocumentData({ ...documentData, emissionDate: e.target.value })
                }
                required
            />
            <label htmlFor="validateDate">Data de validade</label>
            <input
                type="text"
                name="validateDate"
                value={documentData.validateDate}
                onChange={(e) =>
                    setDocumentData({ ...documentData, validateDate: e.target.value })
                }
                required
            />
            <label htmlFor="type">Tipo</label>
            <select
                name="type"
                onChange={(e) =>
                    setDocumentData({ ...documentData, type: e.target.value })
                }
                value={documentData.type}
                required
            >
                <option value="rg">RG</option>
                <option value="CNH">CNH</option>
            </select>
        </div>
    ) : (
        <></>
    );
}
