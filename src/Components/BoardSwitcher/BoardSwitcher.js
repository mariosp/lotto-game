import React from "react";
import "./BoardSwitcher.scss";
import Tabs from "./Tabs/Tabs";
import {BTN_SELECT_CLR_ALL} from "../../Shared/app-constants";
import SelectButton from "../SelectButton/SelectButton";
import {useStore} from "../../Store/store";

const BoardSwitcher = () => {
    const { lottoStore } = useStore();
    const handleClickClearAll = () => {
        lottoStore.clearAllBoard();
    }

    return(
        <div className="boardswitcher-wrapper">
            <Tabs />
            <div className="boards-options">
                <SelectButton cssClassName={"select-clear-all"} onClick={handleClickClearAll}>
                    {BTN_SELECT_CLR_ALL}
                </SelectButton>
            </div>
        </div>
    )
}

export default BoardSwitcher;