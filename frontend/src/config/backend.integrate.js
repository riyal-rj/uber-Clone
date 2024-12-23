import axios from 'axios';
import { create } from 'zustand';
import toast from "react-hot-toast";

const AuthStore = create((set) => ({
        user: null,
        isUserSignedUp: false,
        isUserVerified: false,
        isUserLoggedin: false,
        isCaptainSignedUp: false,
        isCaptainLoggedin: false,

        user_signUp: async (credentials) => {
                const response = await axios.post('/api/user/register', credentials);
                return response;
        },
        user_verify: async (code) => {
                const response = await axios.post('/api/user/verify', { code });
                return response;
        },
        user_login: async (credentials) => {
                const response = await axios.post('/api/user/login', credentials);
                return response;
        },

        captain_signUp: async (credentials) => {
                console.log(credentials);
                const response = await axios.post('/api/captain/register', credentials);
                return response;
        },
        captain_login: async (credentials) => {
                console.log(credentials);
                const response = await axios.post('/api/captain/login', credentials);
                return response;
        },
}));


export default AuthStore;