import { useContext } from "react";
import { postTodayHabitsCheck, postTodayHabitsUncheck } from "../services/trackitApi";

import styled from "styled-components";
import greyCheckbox from "../assets/img/grey-checkbox.png";
import greenCheckbox from "../assets/img/green-checkbox.png";
import UserContext from "../contexts/UserContext";

export default function TodayHabit({ habitId, habitName, habitDone, habitCurrentSequence, habitHighestSequence }) {
    const { reload, setReload } = useContext(UserContext);
    const { token } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    
    function selectHabit() {
        if(habitDone === false) {
            postTodayHabitsCheck(habitId, config)
                .then(resp => {
                    console.log(resp);
                    setReload(!reload);
                })
                .catch(resp => {
                    console.log(resp);
                });
        } else {
            postTodayHabitsUncheck(habitId, config)
                .then(resp => {
                    console.log(resp);
                    setReload(!reload);
                })
                .catch(resp => {
                    console.log(resp);
                });
        }
    }

    return (
        <Habit onClick={selectHabit}>
            <div>
                <h2>{habitName}</h2>
                <P checked={habitDone}>Sequência atual: {habitCurrentSequence}</P>
                {habitHighestSequence === habitCurrentSequence ? (
                    <P checked={habitDone}>Seu recorde: {habitHighestSequence}</P>
                    ) : (
                    <p>Seu recorde: {habitHighestSequence}</p>)
                }
            </div>

            <div>
                {habitDone ? (
                    <img src={greenCheckbox} alt={"Check"}/>
                ) : (
                    <img src={greyCheckbox} alt={"Uncheck"}/>
                )}
            </div>
        </Habit>
    );
}

const Habit = styled.div`
    background-color: #FFFFFF;
    color: #666666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 13px 0 13px;
    border-radius: 5px;
    cursor: pointer;

    div h2 {
        color: #666666;
        font-size: 20px;
        padding-bottom: 10px;
    }

    div p {
        font-size: 13px;
        padding-bottom: 3px;
    }
`;

const P = styled.p`
    color: ${props => props.checked ? "#8FC549" : ""};
`;