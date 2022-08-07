import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import GlobalStyle from "./styles/globalStyles";
import UserContext from "./contexts/UserContext";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import HabitsScreen from "./components/HabitsScreen";
import TodayScreen from "./components/TodayScreen";
import Header from "./components/Header";
import Menu from "./components/Menu";

export default function App() {
    const [reload, setReload] = useState(false);
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDU1NiwiaWF0IjoxNjU5ODQ2ODgyfQ.kfPIi294qkfQQppkX7UKB_q7n8pSyuWxIF41HQzqIvM");
    const [userIcon, setUserIcon] = useState("");
    const [todayHabitsCounter, setTodayHabitsCounter] = useState([]);
    const [habitsList, setHabitsList] = useState([]);
    const [todayHabitsList, setTodayHabitsList] = useState([]);
    
    return (
        <>
            <UserContext.Provider value={{ 
                reload, 
                setReload, 
                token, 
                setToken, 
                userIcon, 
                setUserIcon, 
                habitsList, 
                setHabitsList, 
                todayHabitsList, 
                setTodayHabitsList, 
                todayHabitsCounter, 
                setTodayHabitsCounter, 
            }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/cadastro" element={<SignUpScreen />} />
                        <Route path="/habitos" element={<HabitsScreen />} />
                        <Route path="/hoje" element={<TodayScreen />} />
                    </Routes>
                    <Menu />
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}