import React from "react";

const CheckboxCard = (props) => {
    return (
        <p>
            <input type='checkbox' value={props.value}></input>
            <label htmlFor={props.value}>{props.value}</label>
        </p>
    )
};

export default CheckboxCard;