import React from 'react';
import { createContext, useContext, useState } from "react";

const StepContext = createContext();
export const useStepContext = () => useContext(StepContext);

export const StepProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    return (
        <StepContext.Provider value={{ step, setStep }}>
            {children}
        </StepContext.Provider>
    )
}