import React from 'react'
import { LottoStore } from "./LottoStore";

export const store = {
    lottoStore: new LottoStore()
}

export const StoreContext = React.createContext(store);

export const useStore = () => React.useContext(StoreContext);