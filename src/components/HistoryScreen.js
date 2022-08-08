import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayHabits } from "../services/trackitApi";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import Menu from "./Menu";

export default function HistoryScreen() {
    const { token } = useContext(UserContext);
    const { setTodayHabitsList } = useContext(UserContext);
    const { reload } = useContext(UserContext);
    const navigate = useNavigate();
    
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    useEffect(() => {
        getTodayHabits(config)
            .then(resp => {
                setTodayHabitsList(resp.data);
            })
            .catch(resp => {
                if(resp.response.data.message === "Campo Header inválido!") {
                    navigate("/");
                }
            });
            
    }, [reload]);

    return (
        <>
            <Header />

            <Container>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>

            <Menu />
        </>
    );
}

const Container = styled.div`
    padding: 100px 18px 110px 18px;

    h2 {
        color: #126BA5;
        font-size: 23px;
        padding-bottom: 17px;
    }

    div {
        margin-bottom: 10px;
    }

    p {
        color: #666666;
        font-size: 18px;
    }
`;