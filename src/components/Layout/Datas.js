import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoAddCircle } from "react-icons/io5";
import Header from "./Header";

export default function Datas({ icon, title, path }) {
    const datas = [
        {
            title: "Site 1",
            id: 1,
        },
        {
            title: "Site 2",
            id: 2,
        },
    ];

    return (
        <>
            <Header />
            <Main>
                <h2>{title}</h2>
                <ul>
                    {datas.map((data) => {
                        return (
                            <li key={data.id}>
                                <Link to={`/${path}/${data.id}`}>
                                    {icon}
                                    <p>{data.title}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <IoAddCircle />
            </Main>
        </>
    );
}

const Main = styled.main`
    position: relative;

    li a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    li a svg {
        font-size: 58px;
        color: var(--blue);
        margin: 0 12px 0 16px;
    }

    li a p {
        font-size: 18px;
    }

    & > svg {
        font-size: 76px;
        color: var(--blue);
        position: absolute;
        bottom: 18px;
        right: 11px;
    }
`;
