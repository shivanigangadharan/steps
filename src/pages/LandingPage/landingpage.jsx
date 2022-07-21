import React from 'react';
import edenLogo from '../../assets/logo.PNG';
import './landingpage.css';
import Steps from '../../components/Steps/steps';
import UserInfo from '../../components/UserInfo/userinfo';
import WorkspaceInfo from '../../components/WorkspaceInfo/workspaceinfo';
import PlanChoice from '../../components/PlanChoice/planchoice';
import Result from '../../components/Result/result';
import { useUserContext } from '../../context/userContext';
import { useStepContext } from '../../context/stepContext';

export default function LandingPage() {
    const { step } = useStepContext();
    const { userState } = useUserContext();
    console.log(userState);
    return (
        <div>
            <div className="title-container">
                <img className="eden-logo" src={edenLogo} alt="Eden logo" />
                <span className="title"> Eden </span>
            </div>
            <Steps />
            {step === 1 && <UserInfo />}
            {step === 2 && <WorkspaceInfo />}
            {step === 3 && <PlanChoice />}
            {step === 4 && <Result />}

        </div>
    )
}