import { useState } from 'react';
import Stepper from '../components/Generalformcomp/Stepper';
import Stepcontrol from '../components/Generalformcomp/Stepcontrol';
import Gender from '../components/steps/Gender';
import Rel from '../components/steps/Rel';
import Final from '../components/steps/Final';

const Generalform = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Account information",
        "Personal Details",
        "Complete"
    ];

    const displaySteps = (step) => {
        switch (step) {
            case 1:
                return <Gender />;
            case 2:
                return <Rel />;
            case 3:
                return <Final />;
            default:
                return null;
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-backgroundColor'>
            {/* stepper */}
            <div className='container horizontal mt-5'>
                <Stepper
                    steps={steps}
                    currentStep={currentStep}
                />
            </div>
            {/* stepper control */}
            <Stepcontrol
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
        </div>
    );
};

export default Generalform;
