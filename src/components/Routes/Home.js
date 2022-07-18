import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
    IoLogIn,
    IoPencil,
    IoWallet,
    IoWifi,
    IoAddCircle,
} from "react-icons/io5";
import { HiIdentification } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../assets/contexts/userContext";
import { api } from "../../utils/api";

import Header from "../Layout/Header";
import GenericErrorPopUp from "../Layout/PopUp/GenericErrorPopUp";

export default function Home() {
    const [datas, setDatas] = useState({
        credentials: 0,
        secureNotes: 0,
        documents: 0,
        cards: 0,
        wifi: 0,
    });
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const dataTypes = [
        {
            path: "/credentials/0",
            icon: <IoLogIn />,
            text: "Credenciais",
            number: datas.credentials,
        },
        {
            path: "/securenotes/0",
            icon: <IoPencil />,
            text: "Notas Seguras",
            number: datas.secureNotes,
        },
        {
            path: "/cards/0",
            icon: <IoWallet />,
            text: "Cartões",
            number: datas.cards,
        },
        {
            path: "/wifi/0",
            icon: <IoWifi />,
            text: "Senhas de Wifi",
            number: datas.wifi,
        },
        {
            path: "/documents/0",
            icon: <HiIdentification />,
            text: "Documentos",
            number: datas.documents,
        },
    ];

    const { header } = useContext(UserContext);

    useEffect(() => {
        const promise = api.get("/info", header);
        promise.then((response) => {
            setDatas(response.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
            setError(true);
        });
    }, [error]);

    return (
        <>
            <Header />
            <Main>
                <h2>Minhas senhas</h2>
                <ul>
                    {dataTypes.map((dataType) => {
                        return (
                            <li key={dataType.text}>
                                <Link to={dataType.path}>
                                    <div>
                                        {dataType.icon}
                                        <p>{dataType.text}</p>
                                    </div>
                                    <div>{dataType.number}</div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <IoAddCircle onClick={() => navigate("/new")} />
                {error ? (
                    <GenericErrorPopUp error={error} setError={setError} />
                ) : (
                    <></>
                )}
            </Main>
        </>
    );
}

const Main = styled.main`
    ul li a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        margin: 30px 20px 0px 16px;
    }

    ul li a div {
        display: flex;
        align-items: center;
    }

    ul li a p {
        font-size: 18px;
    }

    ul li a svg {
        font-size: 58px;
        color: var(--blue);
        margin-right: 24px;
    }

    ul li a div:last-child {
        background-color: var(--blue);
        font-size: 18px;
        color: var(--font-color-secondary);
        width: 35px;
        height: 35px;
        justify-content: center;
        border-radius: 50%;
    }

    & > svg {
        font-size: 76px;
        color: var(--blue);
        position: absolute;
        right: 11px;
    }
`;
