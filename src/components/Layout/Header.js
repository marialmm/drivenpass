import styled from "styled-components";
import { IoLockClosed, IoLogOut } from "react-icons/io5";

export default function Header() {
    return (
        <Container>
            <div>
                <IoLockClosed />
                <h1>DrivenPass</h1>
            </div>
            <IoLogOut />
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 87px;
    padding: 0px 16px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    background-color: var(--background);
    border-bottom: solid 3px var(--blue);

    div {
        display: flex;
        align-items: center;
    }

    svg {
        color: var(--blue);
        font-size: 60px;
    }

    h1 {
        font-size: 36px;
        font-family: "Righteous";
        color: var(--blue);
        margin-left: 10px;
    }
`;
