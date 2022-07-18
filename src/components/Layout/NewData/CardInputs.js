import { useEffect, useState } from "react";

export default function CardInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        setNewData({
            number: "",
            name: "",
            cvv: "",
            expirationDate: "",
            password: "",
            isVirtual: false,
            type: "",
            title: "",
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
            <label htmlFor="name">Nome</label>
            <input
                type="text"
                name="name"
                value={newData.name}
                onChange={(e) =>
                    setNewData({ ...newData, name: e.target.value })
                }
                required
            />
            <label htmlFor="cvv">Código de segurança</label>
            <input
                type="password"
                name="cvv"
                value={newData.cvv}
                onChange={(e) =>
                    setNewData({ ...newData, cvv: e.target.value })
                }
                required
            />
            <label htmlFor="password">Senha</label>
            <input
                type="password"
                name="password"
                value={newData.password}
                onChange={(e) =>
                    setNewData({ ...newData, password: e.target.value })
                }
                required
            />
            <label htmlFor="expirationDate">Data de expiração</label>
            <input
                type="password"
                name="expirationDate"
                value={newData.expirationDate}
                onChange={(e) =>
                    setNewData({ ...newData, expirationDate: e.target.value })
                }
                required
            />
            <label htmlFor="isVirtual">Virtual?</label>
            <select
                name="isVirtual"
                onChange={(e) =>
                    setNewData({ ...newData, isVirtual: e.target.value })
                }
                required
            >
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
            </select>
            <label htmlFor="type">Tipo</label>
            <select
                name="type"
                onChange={(e) =>
                    setNewData({ ...newData, type: e.target.value })
                }
                required
            >
                <option value={"credit"}>Crédito</option>
                <option value={"debit"}>Débito</option>
                <option value={"both"}>Crédito e Débito</option>
            </select>
        </div>
    ) : (
        <></>
    );
}
