import { Link } from "react-router-dom";
import { useState } from "react";
import { postSignUp } from "../services/trackitApi";
import { ThreeDots } from  'react-loader-spinner'
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
    const [form, setForm] = useState({
        email: "",
        name: "", 
        image: "", 
        password: ""
    });

    function handleForm(event) {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
        
    }

    function signUp(event) {
        event.preventDefault();
        
        setDisabled(true);

        postSignUp(form).then(resp => {
            console.log(resp.data);
            console.log(form);
            setDisabled(false);
        })

        postSignUp(form).catch(resp => {
            setDisabled(false);
            setTimeout(() => {alert(resp.response.data.message)}, 0);
        })
    }

    return (
        <Container>
            <div>
                <img src={logo} alt="Logo" />
                <h1>TrackIt</h1>
            </div>

            <Form>
                <form onSubmit={signUp}>
                    <input type="email" name="email" value={form.email} placeholder="email" onChange={handleForm} disabled={disabled} required />
                    <input type="password" name="password" value={form.password} placeholder="senha" onChange={handleForm} disabled={disabled} required />
                    <input type="text" name="name" value={form.name} placeholder="nome" onChange={handleForm} disabled={false} required />
                    <input type="url" name="image" value={form.url} placeholder="foto" onChange={handleForm} disabled={false} required />
                    
                    {disabled === false ? (
                        <Button type="submit" disabled={disabled}>Cadastrar</Button>
                        ) : (
                        <Button type="submit" disabled={disabled}>
                            <div>
                                <ThreeDots color="#FFFFFF" height={50} width={50} />
                            </div>
                        </Button>
                    )}

                    <Link to={"/"}>
                        <p>Já tem uma conta? Faça login!</p>
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