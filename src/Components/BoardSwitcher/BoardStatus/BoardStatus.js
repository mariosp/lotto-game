import React from "react";
import "./BoardStatus.scss";
import {useStore} from "../../../Store/store";
import {observer} from "mobx-react";

const BoardStatus = observer(()=> {
    const { lottoStore } = useStore();

    return (
        <div className={`board-status ${lottoStore.gamesStatus}`}>
        </div>
    );
})

export default BoardStatus;