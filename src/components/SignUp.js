import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function SignUp() {
    return (
        <Container>
            <div>
                <img src={logo} alt="Logo" />
                <h1>TrackIt</h1>
            </div>

            <Form>
                <form>
                    <input type="email" placeholder="email" disabled={false} required />
                    <input type="password" placeholder="senha" disabled={false} required />
                    <input type="text" placeholder="nome" disabled={false} required />
                    <input type="text" placeholder="foto" disabled={false} required />
                    <button type="submit" disabled={false}>Cadastrar</button>
                    <Link to={"/"}>
                        <p>Já tem uma conta? Faça login!</p>
                    </Link>
                </form>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px;
    margin: 0 auto;

    img {
        padding-top: 38px;
    }

    h1 {
        font-family: 'Playball';
        color: #126BA5;
        font-size: 69px;
        padding-bottom: 42px;
    }
`;

const Form = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    input {
        font-size: 20px;
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        padding-left: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    input::placeholder {
        color: #DBDBDB;
    }

    input:focus {
        outline: 1px solid rgba(0, 0, 0, 0.4);
    }

    button {
        background-color: #52B6FF;
        color: #FFF;
        font-size: 21px;
        width: 303px;
        height: 45px;
        margin-bottom: 25px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    p {
        color: #52B6FF;
        font-size: 14px;
        text-decoration: underline;
    }
`;