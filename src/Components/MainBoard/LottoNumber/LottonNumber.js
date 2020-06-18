import React, {useEffect, useState} from "react";
import "./LottoNumber.scss";
import {useStore} from "../../../Store/store";
import {observer} from "mobx-react";

const LottoNumber = ({value}) => {
    const { lottoStore } = useStore();
    const [selected, setSelected] = useState(lottoStore.isNumberSelected(value));

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
}

export default LottoNumber;