import React, {useEffect} from "react";
import "./MainBoard.scss"
import { NUMBERS_PER_BOARD } from "../../Shared/app-constants";
import LottoNumber from "./LottoNumber/LottonNumber";
import {observer} from "mobx-react";
import {useStore} from "../../Store/store";

const MainBoard = observer(() => {
    const { lottoStore } = useStore();
    const renderNumberBtns = () => {
        const lnumbers = [];
        for(let i=1; i<= NUMBERS_PER_BOARD; i++) {
            lnumbers.push(<LottoNumber value={i} key={`${lottoStore.selectedTab}-${i}`}/>)
        }
        return lnumbers;
    }

    return (
        <div className="mainboard-wrapper">
            {renderNumberBtns()}
        </div>
    )
})

export default MainBoard;