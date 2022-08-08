import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Header() {
    const { userIcon } = useContext(UserContext);

    return (
        <Container>
            <h2>TrackIt</h2>
            <div>
                <img src={userIcon} alt="User Icon" />
            </div>
        </Container>
    );
}

const Container = styled.div`
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 10px 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    h2 {
        font-family: 'Playball';
        color: #FFFFFF;
        font-size: 39px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`; 