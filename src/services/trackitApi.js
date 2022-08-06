import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function getHabits(header) {
    const promise = axios.get(`${BASE_URL}/habits`, header);
    return promise;
}

function postHabits(body, header) {
    const promise = axios.post(`${BASE_URL}/habits`, body, header);
    return promise;
}

function deleteHabits(id, header) {
    const promise = axios.delete(`${BASE_URL}/habits/${id}`, header);
    return promise;
}

function getTodayHabits(header) {
    const promise = axios.get(`${BASE_URL}/habits/today`, header);
    return promise;
}

export { postLogin, postSignUp, getTodayHabits, getHabits, postHabits, deleteHabits };