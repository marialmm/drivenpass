import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
import { useState } from "react";
import SignupErrorPopUp from "../Layout/PopUp/SignupErrorPopUp";

export default function Signup() {
    const [popUp, setPopUp] = useState(false);

    return (
        <Main>
            <IoLockClosed />
            <h1>DrivenPass</h1>
            <form>
                <label htmlFor="email">Usuário (e-mail)</label>
                <input type="text" name="email" required />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" required />
                <button type="submit">Criar</button>
            </form>
            <Link to="/">
                <button>{"<"} Voltar</button>
            </Link>
            {popUp ? <SignupErrorPopUp popUp={popUp} setPopUp={setPopUp} /> : <></>}
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    padding: 13px 0;

    svg {
        font-size: 165px;
        color: var(--blue);
    }

    h1 {
        font-size: 36px;
        color: var(--blue);
        font-family: "Righteous";
        line-height: 45px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 42px 0px 16px;
    }
    form label {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    form input {
        border: 3px solid #005985;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 250px;
        height: 40px;
        margin-bottom: 16px;
    }

    form button {
        background-color: var(--green);
        margin-top: 32px;
    }

    button {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        border: none;
        width: 250px;
        height: 40px;
        font-size: 18px;
    }

    a button {
        background-color: var(--pink);
    }
`;
