import React from "react";
import "./BottomBar.scss";
import BoardOptions from "./BoardOptions/BoardOptions";
import Total from "./Total/Total";

const BottomBar = () => {
    return (
        <div className="bottom-bar-wrapper">
            <BoardOptions/>
            <Total />
        </div>
    )
}

export default BottomBar;