import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { getTodayHabits } from '../services/trackitApi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from '../contexts/UserContext';

export default function Menu() {
    const { token } = useContext(UserContext);
    const { todayHabitsList, setTodayHabitsList } = useContext(UserContext);
    const { reload } = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    useEffect(() => {
        getTodayHabits(config)
            .then(resp => {
                setTodayHabitsList(resp.data);
            });
    }, [reload]);

    const habitsChecked = todayHabitsList.filter(check => {
        if(check.done === true) {
            return true;
        }
    });

    let percentage = (habitsChecked.length / todayHabitsList.length) * 100;

    if(isNaN(percentage)) {
        percentage = 0;
    }

    return (
        <Container>
            <Link to={"/habitos"}>
                <h3>Hábitos</h3>
            </Link>

            <div>
                <Link to={"/hoje"}>
                    <CircularProgressbar 
                        value={percentage} 
                        text={"Hoje"} 
                        background={true} 
                        backgroundPadding={7} 
                        styles={buildStyles({
                            backgroundColor: "#52B6FF", 
                            textColor: "#FFFFFF", 
                            trailColor: "#52B6FF", 
                            pathColor: "#FFFFFF"
                        })} 
                    />
                </Link>
            </div>

            <Link to={"/historico"}>
                <h3>Histórico</h3>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    background-color: #FFFFFF;
    color: #52B6FF;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 36px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    div {
        width: 100px;
        height: 100px;
        padding-bottom: 150px;
        cursor: pointer;
    }

    h3 {
        color: #52B6FF;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;