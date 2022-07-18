import { useEffect, useState } from "react";

export default function DocumentInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        setNewData({
            fullName: "",
            emissionDate: "",
            issuingAgency: "",
            number: "",
            type: "",
            title: "",
            validateDate: "",
        });
        setUpdate(true);
    }, []);

    return update ? (
        <div>
            <label htmlFor="title">Título</label>
            <input
                type="text"
                name="title"
                value={newData.title}
                onChange={(e) =>
                    setNewData({ ...newData, title: e.target.value })
                }
                required
            />
            <label htmlFor="fullName">Nome Completo</label>
            <input
                type="text"
                name="fullName"
                value={newData.fullName}
                onChange={(e) =>
                    setNewData({ ...newData, fullName: e.target.value })
                }
                required
            />
            <label htmlFor="number">Número</label>
            <input
                type="text"
                name="number"
                value={newData.number}
                onChange={(e) =>
                    setNewData({ ...newData, number: e.target.value })
                }
                required
            />
            <label htmlFor="issuingAgency">Órgão emissor</label>
            <input
                type="text"
                name="issuingAgency"
                value={newData.issuingAgency}
                onChange={(e) =>
                    setNewData({ ...newData, issuingAgency: e.target.value })
                }
                required
            />
            <label htmlFor="emissionDate">Data de emissão</label>
            <input
                type="text"
                name="emissionDate"
                value={newData.emissionDate}
                onChange={(e) =>
                    setNewData({ ...newData, emissionDate: e.target.value })
                }
                required
            />
            <label htmlFor="validateDate">Data de validade</label>
            <input
                type="text"
                name="validateDate"
                value={newData.validateDate}
                onChange={(e) =>
                    setNewData({ ...newData, validateDate: e.target.value })
                }
                required
            />
            <label htmlFor="type">Tipo</label>
            <select
                name="type"
                onChange={(e) =>
                    setNewData({ ...newData, type: e.target.value })
                }
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
