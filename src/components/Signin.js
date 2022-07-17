import styled from "styled-components";
import { Link } from "react-router-dom";

import { IoLockClosed } from "react-icons/io5";

export default function Signin() {
    return (
        <Main>
            <IoLockClosed />
            <h1>DrivenPass</h1>
            <form>
                <label htmlFor="email">Usuário (e-mail)</label>
                <input type="text" name="email" required />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" required />
                <button type="submit">Acessar</button>
            </form>
            <Link to="/signup">Primeiro acesso? Crie sua conta!</Link>
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
        margin: 42px 0px;
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
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        border: none;
        width: 250px;
        height: 40px;
        margin-top: 32px;
        font-size: 18px;
    }
`;
