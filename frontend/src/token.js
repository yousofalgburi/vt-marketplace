import axios from "axios";

export function setAuthToken(token){
    if (token) {
        // Apply to every request
        axios.defaults.headers.common["Authorization"] = token;
        localStorage.setItem("jwtToken", token);
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("jwtToken");
    }
}

export function deleteAuthToken() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwtToken");
}

