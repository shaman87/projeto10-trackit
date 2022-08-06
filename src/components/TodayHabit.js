import styled from "styled-components";

import greyCheckbox from "../assets/img/grey-checkbox.png";
import greenCheckbox from "../assets/img/green-checkbox.png";

export default function TodayHabit({ habitId, habitName, habitDone, habitCurrentSequence, habitHighestSequence }) {
    return (
        <Habit>
            <div>
                <h2>{habitName}</h2>
                <p>Sequência atual: {habitCurrentSequence}</p>
                <p>Seu recorde: {habitHighestSequence}</p>
            </div>

            <div>
                {habitDone ? (
                    <img src={greenCheckbox} alt={"Checkbox"}/>
                ) : (
                    <img src={greyCheckbox} alt={"Checkbox"}/>
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