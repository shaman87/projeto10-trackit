import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

export { postLogin };