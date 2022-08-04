import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import Menu from "./Menu";

export default function Today() {
    const { token, setToken } = useContext(UserContext);
    const { userIcon, setUserIcon } = useContext(UserContext);
    console.log(userIcon);
    return(
        <>
            <Header userIcon={userIcon} />
            <Menu />
        </>
    );
}