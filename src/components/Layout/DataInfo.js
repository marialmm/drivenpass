import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../assets/contexts/userContext";
import { api } from "../../utils/api";

import Header from "./Header";
import GenericErrorPopUp from "./PopUp/GenericErrorPopUp";

export default function DataInfo({ title, path, dataFormat }) {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const { header } = useContext(UserContext);

    useEffect(() => {
        const promise = api.get(`/${path}/${parseInt(id)}`, header);
        promise.then((response) => {
            setData(response.data);
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
                {data !== null ? (
                    <section>
                        <h3>{data.title}</h3>
                        {Object.keys(dataFormat).map((item) => {
                            return (
                                <>
                                    <p className="itemTitle">{dataFormat[item]}</p>
                                    <p>{data[item]} </p>
                                </>
                            );
                        })}
                    </section>
                ) : (
                    <></>
                )}
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
    section {
        padding:0 0 20px 16px;
    }

    h3,
    p {
        font-size: 20px;
        line-height: 24px;
    }

    p.itemTitle {
        margin: 21px 0 8px;
        font-weight: 700;
    }
`;
