import Modal from "../UI/Modal";
import classes from "./SignInForm.module.css";
import useInput from "../../hooks/use-input";

const SignInForm = (props) => {

    const {
        value:enteredEmail, 
        isValid: enteredEmailIsValid,
        hasError:emailInputHasError, 
        valueChangeHandler:emailChangeHandler, 
        valueBlurHandler:emailBlurHandler,
        reset: enteredEmailReset
    } = useInput(value=>value.includes("@"));

    const {
        value:enteredPassword, 
        isValid: enteredPasswordIsValid,
        hasError: PasswordInputHasError, 
        valueChangeHandler:passwordChangeHandler, 
        valueBlurHandler:passwordBlurHandler,
        reset: enteredPasswordReset
    } = useInput(value=>value.trim().length > 0);
    
    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const submitHandler = () => {
        enteredEmailReset();
    }

    let emailErrorInput = `${classes['form-control']}`;
    if (emailInputHasError) {
        emailErrorInput = `${classes['form-control']} ${classes['invalid']}`;
    }

    let passwordErrorInput = `${classes['form-control']}`;
    if (PasswordInputHasError) {
        passwordErrorInput = `${classes['form-control']} ${classes['invalid']}`;
    }

    return (
        <Modal onClose={props.onHideModal}>
            <form onSubmit={submitHandler}>
                <div className={classes["form-header"]}>
                    <h1>Sign In  <button onClick={props.onHideModal}>X</button></h1>
                </div>
                <div className={emailErrorInput}>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
                    {emailInputHasError && <p className={classes['error-text']}>Please enter a valid email.</p>}
                </div>
                <div className={passwordErrorInput}>
                    <label htmlFor="password">Password</label>
                    <input id="password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} value={enteredPassword} />
                    {PasswordInputHasError &&  <p className={classes['error-text']}>Password must not be empty.</p>}
                </div>
                <div className={classes['form-action']}>
                    <button disabled={!formIsValid}>Sign In</button>
                </div>
            </form>
        </Modal>)
}; 

export default SignInForm;