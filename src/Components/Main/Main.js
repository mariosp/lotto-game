import React, {useContext} from "react";
import {LottoStoreContext} from "../../Store/LottoStore";

const Main = ()=> {
    const lotto = useContext(LottoStoreContext)
    console.log(lotto)
    return (
        <div className=".main-layout">
            testa
        </div>
    );
}

export default Main;