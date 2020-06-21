import React from "react";
import "./Info.scss";
import {observer} from "mobx-react";
import {useStore} from "../../Store/store";
import {NOT_TOUCHED, VALID} from "../../Shared/types/board-status";
import {INFO_MORE, INFO_NOT_TOUCHED, INFO_REMOVE, INFO_SELECT} from "../../Shared/app-constants";
import { IoIosInformationCircleOutline} from "react-icons/all";

const Info = () => {
    const { lottoStore } = useStore();

    const printInfoMessage = () => {
        if(lottoStore.gamesStatus === NOT_TOUCHED) {
            return INFO_NOT_TOUCHED;
        } else if (lottoStore.gamesStatus === VALID) {
            return "";
        } else {
            //if not valid check the length of the game array to present the correct message
            return (
                <>
                    <IoIosInformationCircleOutline/>
                    <span className="info-text">
                        {lottoStore.games[lottoStore.selectedTab].length > lottoStore.selectedSystem ?
                            `${INFO_REMOVE} ${lottoStore.games[lottoStore.selectedTab].length - lottoStore.selectedSystem} ${INFO_MORE}`
                            : `${INFO_SELECT} ${lottoStore.selectedSystem - lottoStore.games[lottoStore.selectedTab].length} ${INFO_MORE}`
                        }
                    </span>
                </>
        )
        }
    }
    return(
        <div className={`info info-${lottoStore.gamesStatus}`}>
            {printInfoMessage()}
        </div>
    )
}

export default observer(Info);