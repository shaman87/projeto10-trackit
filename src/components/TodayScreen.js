import { useContext, useEffect } from "react";
import { getTodayHabits } from "../services/trackitApi";

import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import TodayHabit from "./TodayHabit";
import Menu from "./Menu";
import dayjs from 'dayjs';

export default function Today() {
    const dayjs = require('dayjs');
    const { token, setToken } = useContext(UserContext);
    const { userIcon, setUserIcon } = useContext(UserContext);
    const { todayHabitsList, setTodayHabitsList } = useContext(UserContext);
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
                console.log(token);
                setTodayHabitsList(resp.data);
                console.log(resp.data);
            });
    }, []);
        
    return (
        <>
            <Header userIcon={userIcon} />
            <TodayContent>
                <div>
                    <h2>{dayjs().format("dddd, DD/MM")}</h2>
                    <h3>Nenhum hábito concluído ainda</h3>
                </div>

                <div>
                    {todayHabitsList.map((habit, index) => (
                        <TodayHabit 
                            key={index} 
                            habitId={habit.id} 
                            habitName={habit.name} 
                            habitDone={habit.done} 
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

    h3 {
        color: #BABABA;
        font-size: 18px;
        margin-bottom: 30px;
    }

    div {
        margin-bottom: 10px;
    }
`;