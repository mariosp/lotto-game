import React, {useEffect} from "react";
import "./BoardSwitcher.scss";
import {useStore} from "../../Store/store";
import Tab from "./Tab/Tab";
import {observer} from "mobx-react";

const BoardSwitcher = observer(() => {
    const { lottoStore } = useStore();
    console.log(lottoStore);

    const renderTabs = () => {
        return lottoStore.games.map((game, index) => <Tab key={index} index={index} /> );
    }

    const addTab = lottoStore.games.length < 6 && <Tab addTab />;

    return(
        <div className="boardswitcher-wrapper">
            <div className="tabs">
                {renderTabs()}
                {addTab}
            </div>
            <div className="clear-btn">

            </div>
        </div>
    )
})

export default BoardSwitcher;