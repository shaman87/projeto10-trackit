import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {
    const percentage = 66;

    return (
        <Container>
            <h3>Hábitos</h3>
            <div>
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
            </div>
            <h3>Histórico</h3>
        </Container>
    );
}

const Container = styled.div`
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
    }
`;