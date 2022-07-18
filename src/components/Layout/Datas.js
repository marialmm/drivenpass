import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoAddCircle } from "react-icons/io5";
import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import { api } from "../../utils/api";
import GenericErrorPopUp from "./PopUp/GenericErrorPopUp";
import { UserContext } from "../../assets/contexts/userContext";

export default function Datas({ icon, title, path }) {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(false);

    const { header } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = api.get(`/${path}`, header);
        promise.then((response) => {
            setDatas(response.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
            setError(true);
        });
    }, []);

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
