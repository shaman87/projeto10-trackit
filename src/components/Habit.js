import styled from "styled-components";

export default function Habit({ habitId, habitName, habitDays }) {
    alert("oi");
    let chosenDays = [false, false, false, false, false, false, false];
    chosenDays = habitDays.map((day, index) => {
        if(typeof habitDays[index] === "number") {
            return true;
        }
    });
    console.log(chosenDays);

    return (
        <HabitCard>
            <div>
                <h2>{habitName}</h2>
                <div>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </div>
            </div>
            <ion-icon name="trash-outline"></ion-icon>
        </HabitCard>
    );
}

const HabitCard = styled.div`
    background-color: #FFFFFF;
    color: #666666;
    display: flex;
    justify-content: space-between;
    height: 91px;
    padding: 13px;
    border-radius: 5px;
    
    div h2 {
        color: #666666;
        font-size: 20px;
        padding-bottom: 10px;
    }

    div button {
        background-color: #FFFFFF;
        color: #DBDBDB;
        font-size: 19px;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        cursor: pointer;
    }

    ion-icon {
        font-size: 20px;
        cursor: pointer;
    }
`;