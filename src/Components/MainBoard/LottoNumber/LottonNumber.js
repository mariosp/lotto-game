import React, {useEffect, useState} from "react";
import "./LottoNumber.scss";
import {useStore} from "../../../Store/store";
import {observer} from "mobx-react";

const LottoNumber = observer(({value}) => {
    const { lottoStore } = useStore();
    const selectedGame = lottoStore.games[lottoStore.selectedTab];
    const [selected, setSelected] = useState(false);

    useEffect(()=> {
        setSelected(lottoStore.isNumberSelected(value))
    }, [selectedGame, lottoStore, value])

    const handleLottoNumberClick = () => {
        if(selected) {
            setSelected(!selected);
            lottoStore.removeNumberFromGame(value);
        } else {
            setSelected(!selected);
            lottoStore.addNumberToGame(value);
        }
    }

    return (
        <div className="lotto-wrapper">
            <div className={`lotto-number ${selected? 'isSelected': ''}`} onClick={handleLottoNumberClick}>
                {value}
            </div>
        </div>
    );
})

export default LottoNumber;