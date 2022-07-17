import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import SigninErrorPopUp from "../Layout/PopUp/SinginErrorPopUp";
import { UserContext } from "../../assets/contexts/userContext";
import { api } from "../../utils/api";

export default function Signin() {
    const [popUp, setPopUp] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate("/home");
        }
    }, [user]);

    function sendUserData(e) {
        e.preventDefault();

        const promise = api.post("/signin", userData);
        promise.then((res) => {
            setUser(res.data);
            navigate("/home");
        });

        promise.catch((err) => {
            if (err.response.status === 401) {
                setPopUp(true);
            }
        });
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
                    value={userData.email}
                    onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                    }
                    required
                />
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                    }
                    required
                />
                <button type="submit">Acessar</button>
            </form>
            <Link to="/signup">Primeiro acesso? Crie sua conta!</Link>
            {popUp ? (
                <SigninErrorPopUp popUp={popUp} setPopUp={setPopUp} />
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
