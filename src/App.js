import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";
import LoginScreen from "./components/LoginScreen";
import SignUp from "./components/SignUp";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/cadastro" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}