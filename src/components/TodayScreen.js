import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayHabits } from "../services/trackitApi";

import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import TodayHabit from "./TodayHabit";
import Menu from "./Menu";
import dayjs from 'dayjs';

export default function TodayScreen() {
    const dayjs = require('dayjs');
    const { token } = useContext(UserContext);
    const { userIcon, setUserIcon } = useContext(UserContext);
    const { todayHabitsList, setTodayHabitsList } = useContext(UserContext);
    const { reload } = useContext(UserContext);
    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    
    var updateLocale = require('dayjs/plugin/updateLocale')
    dayjs.extend(updateLocale)

    dayjs.updateLocale('en', {
        weekdays: [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ]
    })

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

    const habitsCheckedList = todayHabitsList.filter(check => {
        if(check.done === true) {
            return true;
        }
    });

    const habitsChecked = habitsCheckedList.length;
    const percentage = Math.round((habitsCheckedList.length / todayHabitsList.length) * 100);

    return (
        <>
            <Header userIcon={userIcon} />

            <TodayContent>
                <div>
                    <h2>{dayjs().format("dddd, DD/MM")}</h2>
                    {habitsChecked === 0 ? (
                        <H3 checked={habitsChecked}>Nenhum hábito concluído ainda</H3>
                    ) : (
                        <H3 checked={habitsChecked}>{percentage}% dos hábitos concluídos</H3>
                    )}
                </div>

                <div>
                    {todayHabitsList.map((habit, index) => (
                        <TodayHabit 
                            key={index} 
                            habitId={habit.id} 
                            habitName={habit.name} 
                            habitDone={habit.done} 
                            habitsChecked={habitsChecked} 
                            habitCurrentSequence={habit.currentSequence} 
                            habitHighestSequence={habit.highestSequence} 
                        />
                    ))}
                </div>
            </TodayContent>

            <Menu />
        </>
    );
}

const TodayContent = styled.div`
    padding: 100px 18px 110px 18px;

    h2 {
        color: #126BA5;
        font-size: 23px;
        padding-bottom: 7px;
    }

    div {
        margin-bottom: 10px;
    }
`;

const H3 = styled.h3`
    color: ${props => props.checked === 0 ? "#BABABA" : "#8FC549"};
    font-size: 18px;
    margin-bottom: 30px;
`;