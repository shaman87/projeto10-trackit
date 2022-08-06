import { useContext, useEffect, useState } from "react";
import { getHabits, postHabits } from "../services/trackitApi";
import { ThreeDots } from  'react-loader-spinner';

import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import Habit from "./Habit";
import WeekDayButton from "./WeekDayButton";

export default function HabitsScreen() {
    const { token, setToken } = useContext(UserContext);
    const { userIcon, setUserIcon } = useContext(UserContext);
    const { habitsList, setHabitsList } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [showForm, setShowForm] = useState("hidden");
    const [selectedWeekDays, setSelectedWeekDays] = useState([]);
    const [weekdays, setWeekdays] = useState([7, 1, 2, 3, 4, 5, 6]);

    const [form, setForm] = useState({
        name: "",
        days: selectedWeekDays
    });

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
    }, [selectedWeekDays]);

    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value, 
        });
    }

    function createHabit(event) {
        event.preventDefault();
        
        setDisabled(true);

        if(selectedWeekDays.length !== 0) {
            postHabits(form, config)
                .then(resp => {
                    setDisabled(false);
                    setShowForm("hidden");
                    setSelectedWeekDays([]);
                    setWeekdays([]);
                    setWeekdays([7, 1, 2, 3, 4, 5, 6]);
                    setForm({
                        name: "", 
                        days: selectedWeekDays 
                    });
                })
                .catch(resp => {
                    console.log(resp);
                    setDisabled(false);
                    alert("Erro! Tente novamente");
                });
        } else {
            setDisabled(false);
            alert("Escolha pelo menos 1 dia da semana");
        }
    }
    
    return (
        <>
            <Header userIcon={userIcon} />

            <HabitsList>
                <HabitsHeader>
                    <h2>Meus hábitos</h2>
                    <div onClick={() => setShowForm("")}>+</div>
                </HabitsHeader>

                <Form>
                    <form onSubmit={createHabit} className={showForm}>
                        <input 
                            type="text" 
                            name="name" 
                            value={form.name} 
                            placeholder="nome do hábito" 
                            onChange={handleForm} 
                            disabled={disabled} 
                            required 
                        />
                        <WeekDays>
                            {weekdays.map((day, index) => (
                                <WeekDayButton 
                                    key={index} 
                                    day={day} 
                                    form={form} 
                                    setForm={setForm} 
                                    selectedWeekDays={selectedWeekDays} 
                                    setSelectedWeekDays={setSelectedWeekDays} 
                                />
                            ))}
                        </WeekDays>

                        <div>
                            {disabled === false ? (
                                <>
                                    <span onClick={() => setShowForm("hidden")}>Cancelar</span>
                                    <Button type="submit" disabled={disabled}>Salvar</Button>
                                </>
                            ) : (
                                <>
                                    <span>Cancelar</span>
                                    <Button type="submit" disabled={disabled}>
                                        <div>
                                            <ThreeDots color="#FFFFFF" height={30} width={30} />
                                        </div>
                                    </Button>
                                </>
                            )}
                        </div>
                    </form>
                </Form>            

                {habitsList.map((habit, index) => (
                    <Habit 
                        key={index} 
                        habitId={habit.id} 
                        habitName={habit.name} 
                        habitDays={habit.days} 
                        selectedWeekDays={selectedWeekDays} 
                        setSelectedWeekDays={setSelectedWeekDays} 
                    />
                ))}

                {habitsList.length === 0 ? (
                    <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
                ) : ("")}
            </HabitsList>

            <Menu />
        </>
    );
}

const HabitsList = styled.div`
    padding: 100px 18px 110px 18px;

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
    padding-bottom: 20px;

    h2 {
        color: #126BA5;
        font-size: 23px;
    }

    div {
        background-color: #52B6FF;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 27px;
        padding-bottom: 5px;
        width: 40px;
        height: 35px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const Form = styled.div`
    form {
        background-color: #FFFFFF;
        height: 180px;
        padding: 18px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    input {
        font-size: 20px;
        width: 100%;
        height: 45px;
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
    
    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 17px;
    }

    div span {
        color: #52B6FF; 
        font-size: 16px;
        cursor: pointer;
    }
    
    button {
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 16px;
        width: 84px;
        height: 35px;
        margin-left: 25px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .hidden {
        display: none;
    }
`;

const WeekDays = styled.span`
    display: flex;
    margin-bottom: 17px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        cursor: pointer;
    }

    .unselected {
        background-color: #FFFFFF;
        color: #DBDBDB;
    }

    .selected {
        background-color: #CFCFCF;
        color: #FFFFFF;
    }
`;

const Button = styled.button`
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 16px;
    width: 84px;
    height: 35px;
    margin-left: 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: ${props => props.disabled ? 0.7 : 1};
    position: relative;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
    }
`;