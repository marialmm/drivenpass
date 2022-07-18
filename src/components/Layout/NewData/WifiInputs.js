import { useEffect, useState } from "react";

export default function WifiInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    const [wifiData, setWifiData] = useState({
        title: "",
        password: "",
        name: "",
    });

    useEffect(() => {
        setNewData({...wifiData});
        setUpdate(true);
    }, [wifiData]);

    return update ? (
        <div>
            <label htmlFor="title">Título</label>
            <input
                type="text"
                name="title"
                value={wifiData.title}
                onChange={(e) =>
                    setWifiData({ ...wifiData, title: e.target.value })
                }
                required
            />
            <label htmlFor="name">Nome da rede</label>
            <input
                type="text"
                name="name"
                value={wifiData.name}
                onChange={(e) =>
                    setWifiData({ ...wifiData, name: e.target.value })
                }
                required
            />
            <label htmlFor="password">Senha</label>
            <input
                type="password"
                name="password"
                value={wifiData.password}
                onChange={(e) =>
                    setWifiData({ ...wifiData, password: e.target.value })
                }
                required
            />
        </div>
    ) : (
        <></>
    );
}
