import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const  enteredValueIsValid = validateValue(enteredValue);
    const hasError = !enteredValueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };
    
    const valueBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        hasError: hasError,
        valueChangeHandler: valueChangeHandler,
        valueBlurHandler: valueBlurHandler,
        reset: reset
    }
};

export default useInput;