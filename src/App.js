import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import GlobalStyle from "./styles/globalStyles";
import UserContext from "./contexts/UserContext";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import TodayScreen from "./components/TodayScreen";

export default function App() {
    const [token, setToken] = useState("");
    const [userIcon, setUserIcon] = useState("");

    return (
        <>
            <UserContext.Provider value={{token, setToken, userIcon, setUserIcon}}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/cadastro" element={<SignUpScreen />} />
                        <Route path="/hoje" element={<TodayScreen />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}