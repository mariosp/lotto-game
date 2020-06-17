import {action, computed, observable} from "mobx";
import {NOT_TOUCHED, NOT_VALID, VALID} from "../Shared/types/board-status";

export class LottoStore {
    // @observable boards = 0;
    @observable _games = [];
    @observable _gamesStatus = [];
    @observable _selectedTab;

    constructor() {
        this.init();
    }
    init() {
        this._selectedTab = 0;
        this._games = [[],[],[]];
        this._gamesStatus = [NOT_TOUCHED,NOT_TOUCHED,NOT_TOUCHED]
        for(let i=0; i< this.boards; i++){
            this._games.push([]);
        }
    }

    get selectedTab() {
        return this._selectedTab;
    }

    set selectedTab(value) {
        this._selectedTab = value;
    }


    get games() {
        return this._games;
    }

    set games(value) {
        this._games = value;
    }

    @action
    addGame() {
        this._games.push([]);
    }

    get gamesStatus() {
        return this._gamesStatus[this.selectedTab];
    }

}