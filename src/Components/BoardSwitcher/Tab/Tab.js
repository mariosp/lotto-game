import React from "react";
import "./Tab.scss"
import {useStore} from "../../../Store/store";
import {observer} from "mobx-react";
import {AiOutlinePlusCircle} from "react-icons/all";
import BoardStatus from "../BoardStatus/BoardStatus";

const Tab = observer(({index, addTab}) => {
    const {lottoStore} = useStore();
    const isActive = lottoStore.selectedTab === index;

    const printLabel = () => {
        if(addTab) {
            return <AiOutlinePlusCircle />
        }
        return (index+1).toString().padStart(2,0);
    }

    const handleOnClick = () => {
        if(addTab){
            lottoStore.addGame();
        } else {
            lottoStore.selectedTab = index;
        }
    }

    return (
        <div
            className={`tab-wrapper ${isActive? 'is-active': ''}`}
            onClick={handleOnClick}
        >
            {printLabel()}
            {isActive && <div className="board-status-wrapper"> <BoardStatus /> </div> }
        </div>
    )
})

export default Tab;