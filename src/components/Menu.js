import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Menu() {
    const { todayHabitsList } = useContext(UserContext);

    const habitsChecked = todayHabitsList.filter(check => {
        if(check.done === true) {
            return true;
        }
    });

    const percentage = (habitsChecked.length / todayHabitsList.length) * 100;

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

            <h3>Histórico</h3>
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