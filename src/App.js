import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import GlobalStyle from "./styles/globalStyles";
import UserContext from "./contexts/UserContext";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import HabitsScreen from "./components/HabitsScreen";
import TodayScreen from "./components/TodayScreen";
import HistoryScreen from "./components/HistoryScreen";
import Header from "./components/Header";
import Menu from "./components/Menu";

export default function App() {
    const [reload, setReload] = useState(false);
    const [token, setToken] = useState("");
    const [userIcon, setUserIcon] = useState("");
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
                setTodayHabitsList 
            }}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/cadastro" element={<SignUpScreen />} />
                        <Route path="/habitos" element={<HabitsScreen />} />
                        <Route path="/hoje" element={<TodayScreen />} />
                        <Route path="/historico" element={<HistoryScreen />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}