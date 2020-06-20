import React from "react";
import "./BottomBar.scss";
import BoardOptions from "./BoardOptions/BoardOptions";

const BottomBar = () => {
    return (
        <div className="bottom-bar-wrapper">
            <BoardOptions/>
        </div>
    )
}

export default BottomBar;