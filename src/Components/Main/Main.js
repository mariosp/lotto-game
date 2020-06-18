import React, {useContext} from "react";
import "./Main.scss";
import {observer} from "mobx-react";
import {useStore} from "../../Store/store";
import BoardSwitcher from "../BoardSwitcher/BoardSwitcher";
import Info from "../Info/Info";
import MainBoard from "../MainBoard/MainBoard";
import BottomBar from "../BottomBar/BottomBar";

const Main = observer(()=> {
    return (
        <div className="main-layout">
            <div className="main-ui">
                <Info />
                <BoardSwitcher />
                <MainBoard />
                <BottomBar />
            </div>
        </div>
    );
})

export default Main;