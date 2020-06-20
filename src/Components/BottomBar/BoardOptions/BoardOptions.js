import React from "react";
import "./BoardOptions.scss";
import SelectButton from "../../SelectButton/SelectButton";
import {BTN_SELECT_CLR} from "../../../Shared/app-constants";
import {useStore} from "../../../Store/store";

const BoardOptions = () => {
    const { lottoStore } = useStore()

    const handleClick = () => {
        lottoStore.clearBoard();
    }

    return (
        <div className="board-options">
            <SelectButton cssClassName={"select-clear"} onClick={handleClick}>
                {BTN_SELECT_CLR}
            </SelectButton>
        </div>
    )
}

export default BoardOptions;