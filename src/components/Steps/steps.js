import React from 'react';
import { useStepContext } from '../../context/stepContext';

export default function Steps() {
    const { setStep } = useStepContext();
    return (
        <div>
            <button onClick={() => setStep(1)}> 1 </button>
            <button onClick={() => setStep(2)}> 2 </button>
            <button onClick={() => setStep(3)}> 3 </button>
            <button onClick={() => setStep(4)}> 4 </button>
        </div>
    )
}