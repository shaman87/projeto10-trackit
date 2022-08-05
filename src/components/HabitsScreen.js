import { useContext, useEffect } from "react";
import { getHabits } from "../services/trackitApi";

import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import Habit from "./Habit";

export default function HabitsScreen() {
    const { token, setToken } = useContext(UserContext);
    const { userIcon, setUserIcon } = useContext(UserContext);
    const { habitsList, setHabitsList } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    useEffect(() => {
        getHabits(config)
            .then(resp => {
                console.log(token);
                console.log(resp.data);
                setHabitsList(resp.data);
            });
    }, []);

    return (
        <>
            <Header userIcon={userIcon} />

            <HabitsList>
                <HabitsHeader>
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </HabitsHeader>

                {habitsList.map((habit, index) => (
                    <Habit 
                        key={index} 
                        habitId={habit.id} 
                        habitName={habit.name} 
                        habitDays={habit.days} 
                    />
                ))}

                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
            </HabitsList>

            <Menu />
        </>
    );
}

const HabitsList = styled.div`
    padding: 100px 18px 110px 18px;
    
    div {
        margin-bottom: 10px;
    }

    h3 {
        color: #666666;
        font-size: 18px;
        padding-top: 20px;
    }
`;

const HabitsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    h2 {
        color: #126BA5;
        font-size: 23px;
    }

    button {
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 27px;
        width: 40px;
        height: 35px;
        padding-top: 4px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;