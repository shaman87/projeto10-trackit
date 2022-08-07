import { deleteHabits } from "../services/trackitApi";
import { useContext } from "react";

import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Habit({ habitId, habitName, habitDays, selectedWeekDays, setSelectedWeekDays }) {
    const { reload, setReload } = useContext(UserContext);
    const { token } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    function deleteHabitCard() {
        if(window.confirm("Deseja realmente exlcuir o hábito da lista?")) {
            deleteHabits(habitId, config)
                .then(() => {
                    alert("Hábito excluído da lista");
                    setSelectedWeekDays([]);
                    setReload(!reload);
                });
        }
    }

    return (
        <HabitCard>
            <div>
                <h2>{habitName}</h2>
                <div>
                    {habitDays.includes(0) ? (<button className="selected">D</button>) : (<button>D</button>)}
                    {habitDays.includes(1) ? (<button className="selected">S</button>) : (<button>S</button>)}
                    {habitDays.includes(2) ? (<button className="selected">T</button>) : (<button>T</button>)}
                    {habitDays.includes(3) ? (<button className="selected">Q</button>) : (<button>Q</button>)}
                    {habitDays.includes(4) ? (<button className="selected">Q</button>) : (<button>Q</button>)}
                    {habitDays.includes(5) ? (<button className="selected">S</button>) : (<button>S</button>)}
                    {habitDays.includes(6) ? (<button className="selected">S</button>) : (<button>S</button>)}
                </div>
            </div>
            <ion-icon name="trash-outline" onClick={deleteHabitCard} ></ion-icon>
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
    margin-bottom: 10px;
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
    }

    ion-icon {
        font-size: 20px;
        cursor: pointer;
    }

    .selected {
        background-color: #CFCFCF;
        color: #FFFFFF;
    }
`;