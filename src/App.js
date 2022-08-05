import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import GlobalStyle from "./styles/globalStyles";
import UserContext from "./contexts/UserContext";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import HabitsScreen from "./components/HabitsScreen";
import TodayScreen from "./components/TodayScreen";

export default function App() {
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDU1NiwiaWF0IjoxNjU5NjM4NDAwfQ.seHEmJfmwwj18Pp5R8HoC1dCsL-PRCLrLpcTGA9b4Cw");
    const [userIcon, setUserIcon] = useState("");
    const [habitsList, setHabitsList] = useState([]);
    const [todayHabitsList, setTodayHabitsList] = useState([]);

    return (
        <>
            <UserContext.Provider value={{ 
                token, 
                setToken, 
                userIcon, 
                setUserIcon, 
                habitsList, 
                setHabitsList, 
                todayHabitsList, 
                setTodayHabitsList, 
            }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/cadastro" element={<SignUpScreen />} />
                        <Route path="/habitos" element={<HabitsScreen />} />
                        <Route path="/hoje" element={<TodayScreen />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}