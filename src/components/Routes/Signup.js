import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
import { useState } from "react";

import { api } from "../../utils/api";
import SignupErrorPopUp from "../Layout/PopUp/SignupErrorPopUp";

export default function Signup() {
    const [popUp, setPopUp] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    function sendUserData(e){
        e.preventDefault();

        const promise = api.post("/signup", user);
        promise.then(()=>{
            navigate("/");
        });
        promise.catch(err => {
            console.log(err.response.data);
            if(err.response.status === 409){
                setPopUp(true);
            }

        })
    }

    return (
        <Main>
            <IoLockClosed />
            <h1>DrivenPass</h1>
            <form onSubmit={sendUserData}>
                <label htmlFor="email">Usuário (e-mail)</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    required
                />
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    required
                />
                <button type="submit">Criar</button>
            </form>
            <Link to="/">
                <button>{"<"} Voltar</button>
            </Link>
            {popUp ? (
                <SignupErrorPopUp popUp={popUp} setPopUp={setPopUp} />
            ) : (
                <></>
            )}
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
