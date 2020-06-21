import React from "react";
import "./BoardSwitcher.scss";
import Tabs from "./Tabs/Tabs";
import {BTN_RANDOM_ALL, BTN_SELECT_CLR_ALL, NUMBERS_PER_BOARD, NUMBERS_PER_BOARD_MIN} from "../../Shared/app-constants";
import SelectButton from "../SelectButton/SelectButton";
import {useStore} from "../../Store/store";
import randomNumbers from "../../Shared/random-numbers";

const BoardSwitcher = () => {
    const { lottoStore } = useStore();
    const handleClickClearAll = () => {
        lottoStore.clearAllBoard();
    }

    const handleClickRandomNumbersAll = () => {
        lottoStore._games.forEach((value, index)=> {
            lottoStore.addNumbersToGame(
                randomNumbers(lottoStore._selectedSystem[index], NUMBERS_PER_BOARD_MIN, NUMBERS_PER_BOARD),
                index
            );
        })
    }

    return(
        <div className="boardswitcher-wrapper">
            <Tabs />
            <div className="boards-options">
                <SelectButton cssClassName={"select-clear-all"} onClick={handleClickClearAll}>
                    {BTN_SELECT_CLR_ALL}
                </SelectButton>
                <SelectButton cssClassName={"select-clear-all"} onClick={handleClickRandomNumbersAll}>
                    {BTN_RANDOM_ALL}
                </SelectButton>
            </div>
        </div>
    )
}

export default BoardSwitcher;