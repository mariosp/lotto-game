import React from "react";
import "./MainBoard.scss"
import { NUMBERS_PER_BOARD } from "../../Shared/app-constants";
import LottoNumber from "./LottoNumber/LottonNumber";

const MainBoard = () => {

    const renderNumberBtns = () => {
        const lnumbers = []
        for(let i=1; i<= NUMBERS_PER_BOARD; i++) {
            lnumbers.push(<LottoNumber value={i} key={i}/>)
        }
        console.log(lnumbers)
        return lnumbers;
    }

    return (
        <div className="mainboard-wrapper">
            {renderNumberBtns()}
        </div>
    )
}

export default MainBoard;