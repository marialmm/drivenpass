import {
    IoLogIn,
    IoPencil,
    IoWallet,
    IoWifi,
    IoCheckmarkCircle,
} from "react-icons/io5";
import { HiIdentification } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import Header from "../Layout/Header";
import styled from "styled-components";
import CredentialInputs from "../Layout/NewData/CredentialInputs";
import { useNavigate } from "react-router-dom";
import CardInputs from "../Layout/NewData/CardInputs";

export default function NewData() {
    const [category, setCategory] = useState({});
    const [newData, setNewData] = useState({});

    const navigate = useNavigate();

    const categories = [
        {
            icon: <IoLogIn />,
            text: "Credenciais",
            category: "credential",
            inputs: (
                <CredentialInputs newData={newData} setNewData={setNewData} />
            ),
        },
        {
            icon: <IoPencil />,
            text: "Notas Seguras",
            category: "securenote",
            inputs: "",
        },
        {
            icon: <IoWallet />,
            text: "Cartões",
            category: "card",
            inputs: <CardInputs newData={newData} setNewData={setNewData} />,
        },
        {
            icon: <IoWifi />,
            text: "Senhas de Wifi",
            category: "wifi",
        },
        {
            icon: <HiIdentification />,
            text: "Documentos",
            category: "document",
        },
    ];

    function showCategories() {
        return (
            <>
                <h2>Categoria</h2>
                <ul>
                    {categories.map((category) => {
                        return (
                            <li
                                onClick={() =>
                                    setCategory({
                                        category: category.category,
                                        text: category.text,
                                        inputs: category.inputs,
                                    })
                                }
                                key={category.category}
                            >
                                {category.icon}
                                <p>{category.text}</p>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }

    function showCategoryInputs() {
        return (
            <>
                <h2>{category.text}</h2>
                <h3>Cadastro</h3>
                <form>
                    {category.inputs}
                    <div className="footer">
                        <p onClick={() => navigate(-1)}>{"<"} Voltar</p>
                        <IoCheckmarkCircle />
                    </div>
                </form>
            </>
        );
    }

    return (
        <>
            <Header />
            <Main>
                {category.category ? showCategoryInputs() : showCategories()}
            </Main>
        </>
    );
}

const Main = styled.main`
    ul li {
        display: flex;
        align-items: center;
        margin: 0 0 30px 18px;
    }

    ul li svg {
        font-size: 58px;
        color: var(--blue);
        margin-right: 24px;
    }

    ul li p {
        font-size: 18px;
    }

    h3,
    form {
        margin-left: 18px;
    }

    h3 {
        font-size: 20px;
        margin-bottom: 17px;
    }

    form div {
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    form label {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    form input,
    form select {
        border: 3px solid #005985;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        height: 40px;
        margin-bottom: 16px;
    }

    form div.footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 94%;
    }

    form div.footer svg {
        font-size: 76px;
        color: var(--green);
    }

    form div.footer p {
        font-size: 18px;
        text-decoration: underline;
    }
`;
