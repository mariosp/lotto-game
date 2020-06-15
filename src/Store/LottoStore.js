import { observable } from "mobx";
import { createContext } from "react";

class LottoStore {
    @observable games = [];

    get games() {
       return this.game;
    }

    set games(games) {
        this.games = games;
    }
}

export const LottoStoreContext = createContext(new LottoStore());