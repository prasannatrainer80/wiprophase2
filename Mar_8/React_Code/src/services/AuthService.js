import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:5281/api/Auth/";

class AuthService {

    getAdminBoard() {
        // alert("Header is " +authHeader())
        return axios.get("http://localhost:5281/api/SomeProtected", { headers: authHeader() });
    }
    
    async login(username,password) {
        const response = await axios.post("http://localhost:5281/api/Auth/login", { username, password });
        // alert(response.data.token)
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            // alert("Lc " +localStorage.getItem("token"))
        }
        return response.data.token; 
    }

    register(name,email,password,roles) {
        return axios.post(API_URL + "addNewUser", {
            name,
            email,
            password,
            roles
          });
    }
}
export default new AuthService();