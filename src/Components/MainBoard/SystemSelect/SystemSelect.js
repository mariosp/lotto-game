import React from "react";
import "./SystemSelect.scss";
import {observer} from "mobx-react";
import {MAX_SYSTEM_NUMBER, MIN_SYSTEM_NUMBER, SYSTEM_LABEL} from "../../../Shared/app-constants";
import SelectButton from "../SelectButton/SelectButton";
import {useStore} from "../../../Store/store";

const SystemSelect = observer(() => {
    const {lottoStore} = useStore();

    const handleClick = (valueOfButton) => {
        lottoStore.selectedSystem === valueOfButton || ( lottoStore.selectedSystem = valueOfButton);
    };

    const renderSystemSelectBtns = () => {
        return new Array(MAX_SYSTEM_NUMBER - (MIN_SYSTEM_NUMBER-1))
            .fill()
            .map((value,index)=> MIN_SYSTEM_NUMBER + index) //Create an array from MIN_SYSTEM TO MAX_STYSTEM
            .map((value, index) =>
                <SelectButton
                key={`${lottoStore.selectedTab}-${value}`}
                value={value}
                cssClassName={`select-btn ${lottoStore.selectedSystem === value ? 'selectedBtn': ''}`}
                onClick={()=>handleClick(value)}
                >
                    {value}
                </SelectButton>);
    }

    return (
        <div className="system-select-wrapper">
            <div className="system-select-label">{SYSTEM_LABEL}</div>
            {renderSystemSelectBtns()}
        </div>
    );
})

export default SystemSelect;