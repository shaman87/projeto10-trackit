import styled from "styled-components";

export default function Header({ userIcon }) {
    return (
        <Container>
            <h2>TrackIt</h2>
            <div>
                <img src={"https://i.pinimg.com/originals/f3/79/9f/f3799fb3ba7632b83f4cd7cf0c7281b6.jpg"} alt="User Icon" />
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