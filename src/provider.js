import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [accessToken, setAccessToken] = useState(
        localStorage.getItem("accessToken") || ''
    );
    const [refreshToken, setRefreshToken] = useState(
        localStorage.getItem("refreshToken") || ''
    );


    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setRefreshToken(null);
        setAccessToken(null);
    };

    return (
        <AuthContext.Provider value={{ accessToken, refreshToken, setAccessToken, setRefreshToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
}