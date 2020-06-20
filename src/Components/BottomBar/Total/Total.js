import React, {useEffect, useState} from "react";
import "./Total.scss";
import {observer} from "mobx-react";
import {useStore} from "../../../Store/store";
import SelectButton from "../../SelectButton/SelectButton";
import {
    BTN_SELECT_PLAY_ALL,
    DEFAULT_SYSTEM_NUMBER,
    SUB_TOTAL_MSG,
    TOTAL_MSG,
    VALID_NUMBER
} from "../../../Shared/app-constants";
import {VALID} from "../../../Shared/types/board-status";
import calculateColumns from "../../../Shared/calculate-columns";

const Total = () => {
    const defaultPrice = (0).toFixed(2);
    const { lottoStore } = useStore();
    const [subTotal, setSubTotal] = useState(defaultPrice);
    const [total, setTotal] = useState(defaultPrice);

    useEffect(()=> {
        if (lottoStore.gamesStatus === VALID){
            const columns = calculateColumns(lottoStore.games[lottoStore._selectedTab], VALID_NUMBER).length
            setSubTotal(columns.toFixed(2))
        } else {
            setSubTotal(defaultPrice);
        }
    }, [lottoStore.gamesStatus, lottoStore._selectedTab])

    useEffect(()=> {
        let price = 0.00;
        if(checkIfAllBoardsAreValid()){
            lottoStore._games.map((game)=> {
                price += calculateColumns(game, VALID_NUMBER).length
            })
            setTotal(price.toFixed(2))
        } else {
            setTotal(defaultPrice)
        }
    }, [lottoStore.gamesStatus, lottoStore._selectedTab])

    const handleClickPlayAll = () => {
        console.log("PLAY ALL")
    }

    const checkIfAllBoardsAreValid = () => {
        return lottoStore._gamesStatus.every((status) => status === VALID)
    }

    return (
        <div className="total-wrapper">
            <div className="cost">
                <div className="sub-total">{SUB_TOTAL_MSG} {subTotal}</div>
                <div className="total">{TOTAL_MSG} {total}</div>
            </div>
            <SelectButton
                cssClassName={"select-play-all"}
                onClick={handleClickPlayAll}
                disabled={!checkIfAllBoardsAreValid()}
            >
                {BTN_SELECT_PLAY_ALL}
            </SelectButton>
        </div>
    )
}

export default observer(Total);