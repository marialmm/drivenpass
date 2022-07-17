import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoLogIn, IoPencil, IoWallet, IoWifi } from "react-icons/io5";
import { HiIdentification } from "react-icons/hi";

import Header from "./Header";

export default function Home() {
    const dataTypes = [
        {
            path: "/credentials",
            icon: <IoLogIn />,
            text: "Credenciais",
            number: 0,
        },
        {
            path: "/securenotes",
            icon: <IoPencil />,
            text: "Notas Seguras",
            number: 0,
        },
        {
            path: "/cards",
            icon: <IoWallet />,
            text: "Cartões",
            number: 0,
        },
        {
            path: "/wifi",
            icon: <IoWifi />,
            text: "Wifi",
            number: 0,
        },
        {
            path: "/documents",
            icon: <HiIdentification />,
            text: "Documentos",
            number: 0,
        },
    ];

    return (
        <>
            <Header />
            <Main>
                <h2>Minhas senhas</h2>
                <ul>
                    {dataTypes.map((dataType) => {
                        return (
                            <li>
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
            </Main>
        </>
    );
}

const Main = styled.main`
    h2 {
        width: 100vw;
        height: 41px;
        background-color: var(--blue);
        padding: 9px 16px;
        line-height: 22px;
        font-size: 18px;
        color: var(--font-color-secondary);
    }

    ul li a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        margin: 30px 20px 0px 16px;
    }

    ul li a div{
        display: flex;
        align-items: center;
    }

    ul li a svg {
        font-size: 58px;
        color: var(--blue);
        margin-right: 24px;
    }

    ul li a div:last-child{
        background-color: var(--blue);
        font-size:18px;
        color: var(--font-color-secondary);
        width: 35px;
        height: 35px;
        justify-content: center;
        border-radius: 50%;
    }
`;
