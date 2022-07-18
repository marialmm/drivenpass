import { createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", undefined);
    let header = "";

    if(user){
        header = {
            headers: {
                Authorization: `Bearer ${user}`
            }
        }
    
    }
    
    return (
        <UserContext.Provider value={{ user, setUser, header }}>
            {children}
        </UserContext.Provider>
    );
};
