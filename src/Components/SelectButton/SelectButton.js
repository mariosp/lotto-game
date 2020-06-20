import React from "react";
import "./SelectButton.scss";

const SelectButton = ({children, onClick, cssClassName}) => {
    return (
        <div className={cssClassName} onClick={onClick}>
            {children}
        </div>
    );
}

export default SelectButton;