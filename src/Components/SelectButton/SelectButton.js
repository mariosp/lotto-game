import React from "react";
import "./SelectButton.scss";

const SelectButton = ({children, onClick, cssClassName, disabled = false}) => {
    return (
        <button
            className={cssClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default SelectButton;