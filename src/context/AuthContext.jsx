import { createContext, useState } from "react";
import { loginRequest } from "../services/AuthService";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const loginfunc = async(email, password, position) => {
        const {success, user} = await loginRequest(email, password, position);
        setUser(success ? user : null)
        return success
    }

    const logout = () => setUser(null)

    return(
        <AuthContext.Provider value={{user, login: loginfunc, logout}}>
            {children}
        </AuthContext.Provider>
    )
}