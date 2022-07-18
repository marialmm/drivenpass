import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CredentialInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        setNewData({
            title: "",
            password: "",
            username: "",
            url: "",
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
            />
            <label htmlFor="url">URL</label>
            <input
                type="url"
                name="url"
                value={newData.url}
                onChange={(e) =>
                    setNewData({ ...newData, url: e.target.value })
                }
            />
            <label htmlFor="username">Usuário</label>
            <input
                type="text"
                name="username"
                value={newData.username}
                onChange={(e) =>
                    setNewData({ ...newData, username: e.target.value })
                }
            />
            <label htmlFor="password">Senha</label>
            <input
                type="password"
                name="password"
                value={newData.password}
                onChange={(e) =>
                    setNewData({ ...newData, password: e.target.value })
                }
            />
        </div>
    ) : (
        <></>
    );
}

