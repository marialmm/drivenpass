import { useEffect, useState } from "react";

export default function CredentialInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    const [credentialData, setCredentialData] = useState({
        title: "",
        password: "",
        username: "",
        url: "",
    });

    useEffect(() => {
        setNewData({...credentialData});
        setUpdate(true);
    }, [credentialData]);

    return update ? (
        <div>
            <label htmlFor="title">Título</label>
            <input
                type="text"
                name="title"
                value={credentialData.title}
                onChange={(e) =>
                    setCredentialData({ ...credentialData, title: e.target.value })
                }
                required
            />
            <label htmlFor="url">URL</label>
            <input
                type="url"
                name="url"
                value={credentialData.url}
                onChange={(e) =>
                    setCredentialData({ ...credentialData, url: e.target.value })
                }
                required
            />
            <label htmlFor="username">Usuário</label>
            <input
                type="text"
                name="username"
                value={credentialData.username}
                onChange={(e) =>
                    setCredentialData({ ...credentialData, username: e.target.value })
                }
                required
            />
            <label htmlFor="password">Senha</label>
            <input
                type="password"
                name="password"
                value={credentialData.password}
                onChange={(e) =>
                    setCredentialData({ ...credentialData, password: e.target.value })
                }
                required
            />
        </div>
    ) : (
        <></>
    );
}
