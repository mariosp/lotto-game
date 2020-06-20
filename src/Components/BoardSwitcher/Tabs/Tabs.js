import React from "react";
import "./Tabs.scss";
import {observer} from "mobx-react";
import {useStore} from "../../../Store/store";
import Tab from "../Tab/Tab";

const Tabs = () => {
    const { lottoStore } = useStore();

    const renderTabs = () => {
        return lottoStore.games.map((game, index) => <Tab key={index} index={index} /> );
    }

    const addTab = lottoStore.games.length < 6 && <Tab addTab />;

    return (
        <div className="tabs">
            {renderTabs()}
            {addTab}
        </div>
    );
}

export default observer(Tabs);