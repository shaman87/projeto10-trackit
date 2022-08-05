import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { postLogin } from "../services/trackitApi";
import { ThreeDots } from  'react-loader-spinner'
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import UserContext from "../contexts/UserContext";

export default function LoginScreen() {
    const navigate = useNavigate();
    const { token, setToken} = useContext(UserContext);
    const { userIcon, setUserIcon } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    function handleForm(event) {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    }

    function logIn(event) {
        event.preventDefault();
        
        setDisabled(true);

        postLogin(form)
            .then(resp => {
                console.log(resp.data);
                setDisabled(false);
                //setToken(resp.data.token);
                setUserIcon(resp.data.image);
                navigate("/hoje");
            })
            .catch(resp => {
                setDisabled(false);
                setTimeout(() => {alert(resp.response.data.message)}, 0);
            });
    }

    useNavigate("/hoje");

    return (
        <Container>
            <div>
                <img src={logo} alt="Logo" />
                <h1>TrackIt</h1>
            </div>

            <Form>
                <form onSubmit={logIn}>
                    <input type="email" name="email" value={form.email} placeholder="email" onChange={handleForm} disabled={disabled} required />
                    <input type="password" name="password" value={form.password} placeholder="senha" onChange={handleForm} disabled={disabled} required />

                    {disabled === false ? (
                        <Button type="submit" disabled={disabled}>Entrar</Button>
                        ) : (
                        <Button type="submit" disabled={disabled}>
                            <div>
                                <ThreeDots color="#FFFFFF" height={50} width={50} />
                            </div>
                        </Button>
                    )}

                    <Link to={"/cadastro"}>
                        <p>Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </form>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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

    p {
        color: #52B6FF;
        font-size: 14px;
        text-decoration: underline;
    }
`;

const Button = styled.button`
    background-color: #52B6FF;
    color: #FFF;
    font-size: 21px;
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: ${props => props.disabled ? 0.7 : 1};

    div {
        display: flex;
        justify-content: center;
    }
`;