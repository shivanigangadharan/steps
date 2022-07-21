import React, { createContext, useContext, useReducer } from 'react';
import { userReducer } from '../reducer/userReducer';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const initialState = {
        fullName: "",
        displayName: "",
        workspaceName: "",
        workspaceURL: "",
        planChoice: "",
    }
    const [userState, userDispatch] = useReducer(userReducer, initialState);
    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            {children}
        </UserContext.Provider>
    )
}