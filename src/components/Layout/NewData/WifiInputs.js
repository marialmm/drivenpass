import { useEffect, useState } from "react";

export default function WifiInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        setNewData({
            title: "",
            password: "",
            name: ""
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
            <label htmlFor="name">Nome da rede</label>
            <input
                type="text"
                name="name"
                value={newData.name}
                onChange={(e) =>
                    setNewData({ ...newData, name: e.target.value })
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
        </div>
    ) : (
        <></>
    );
}

