import { useEffect, useState } from "react";

export default function CardInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    const [cardData, setCardData] = useState({
        number: "",
        name: "",
        cvv: "",
        expirationDate: "",
        password: "",
        isVirtual: false,
        type: "credit",
        title: "",
    });

    useEffect(() => {
        setNewData({ ...cardData });
        setUpdate(true);
    }, [cardData]);

    return update ? (
        <div>
            <label htmlFor="title">Título</label>
            <input
                type="text"
                name="title"
                value={cardData.title}
                onChange={(e) =>
                    setCardData({ ...cardData, title: e.target.value })
                }
                required
            />
            <label htmlFor="number">Número</label>
            <input
                type="text"
                name="number"
                value={cardData.number}
                onChange={(e) =>
                    setCardData({ ...cardData, number: e.target.value })
                }
                required
            />
            <label htmlFor="name">Nome</label>
            <input
                type="text"
                name="name"
                value={cardData.name}
                onChange={(e) =>
                    setCardData({ ...cardData, name: e.target.value })
                }
                required
            />
            <label htmlFor="cvv">Código de segurança</label>
            <input
                type="password"
                name="cvv"
                value={cardData.cvv}
                onChange={(e) =>
                    setCardData({ ...cardData, cvv: e.target.value })
                }
                required
            />
            <label htmlFor="password">Senha</label>
            <input
                type="password"
                name="password"
                value={cardData.password}
                onChange={(e) =>
                    setCardData({ ...cardData, password: e.target.value })
                }
                required
            />
            <label htmlFor="expirationDate">Data de expiração</label>
            <input
                type="password"
                name="expirationDate"
                value={cardData.expirationDate}
                onChange={(e) =>
                    setCardData({ ...cardData, expirationDate: e.target.value })
                }
                required
            />
            <label htmlFor="isVirtual">Virtual?</label>
            <select
                name="isVirtual"
                onChange={(e) =>
                    setCardData({ ...cardData, isVirtual: e.target.value })
                }
                value={cardData.isVirtual}
                required
            >
                <option value={false}>Não</option>
                <option value={true}>Sim</option>
            </select>
            <label htmlFor="type">Tipo</label>
            <select
                name="type"
                onChange={(e) =>
                    setNewData({ ...cardData, type: e.target.value })
                }
                value={cardData.type}
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
