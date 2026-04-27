'use client';

import { useContext, useState, createContext } from "react";

type AppContextType = {
    userLogged: boolean,
    setUserLogged: (u: boolean) => void,
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
    const [userLogged, setUserLogged] = useState(false);
    

    return (
        <AppContext.Provider 
        value={{userLogged, setUserLogged}}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useData = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useData debe usarse dentro de un DataProvider");
    return context;
};