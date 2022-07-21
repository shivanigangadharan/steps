import React, { useState } from 'react';
import { useUserContext } from '../../context/userContext';
import { useStepContext } from '../../context/stepContext';

export default function UserInfo() {
    const { userState, userDispatch } = useUserContext();
    const { step, setStep } = useStepContext();

    const [fullName, setFullname] = useState(userState.fullName);
    const [displayName, setDisplayname] = useState(userState.displayName);

    const handleNext = () => {
        userDispatch({ type: "ADD_FULLNAME", payload: fullName });
        userDispatch({ type: "ADD_DISPLAYNAME", payload: displayName });
        setStep(2);
    }
    return (
        <div>
            UserInfo
            <form onSubmit={handleNext}>
                <input required onChange={(e) => setFullname(e.target.value)} value={fullName} type="text" />
                <input required onChange={(e) => setDisplayname(e.target.value)} value={displayName} type="text" />
                <input type="submit" value="Next" />
            </form>
        </div>
    )
}