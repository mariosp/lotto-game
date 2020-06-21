import React from "react";
import "./BoardOptions.scss";
import SelectButton from "../../SelectButton/SelectButton";
import {BTN_RANDOM, BTN_SELECT_CLR, NUMBERS_PER_BOARD, NUMBERS_PER_BOARD_MIN} from "../../../Shared/app-constants";
import {useStore} from "../../../Store/store";
import randomNumbers from "../../../Shared/random-numbers";

const BoardOptions = () => {
    const { lottoStore } = useStore()

    const handleClick = () => {
        lottoStore.clearBoard();
    }

    const handleClickRandomNumbers = () => {
        lottoStore.addNumbersToGame(
            randomNumbers(lottoStore.selectedSystem, NUMBERS_PER_BOARD_MIN, NUMBERS_PER_BOARD),
            lottoStore.selectedTab
        );
    }

    return (
        <div className="board-options">
            <SelectButton cssClassName={"select-clear"} onClick={handleClick}>
                {BTN_SELECT_CLR}
            </SelectButton>
            <SelectButton cssClassName={"select-clear"} onClick={handleClickRandomNumbers}>
                {BTN_RANDOM}
            </SelectButton>
        </div>
    )
}

export default BoardOptions;