import {action, computed, observable} from "mobx";
import {NOT_TOUCHED, NOT_VALID, VALID} from "../Shared/types/board-status";
import {DEFAULT_SYSTEM_NUMBER, NUMBERS_PER_BOARD} from "../Shared/app-constants";

export class LottoStore {
    // @observable boards = 0;
    @observable _games = [];
    @observable _gamesStatus = [];
    @observable _selectedTab;
    @observable _selectedSystem = [];

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
        this._selectedSystem = new Array(3).fill(DEFAULT_SYSTEM_NUMBER);
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

    get selectedSystem() {
        return this._selectedSystem[this.selectedTab];
    }

    set selectedSystem(value) {
        this._selectedSystem[this.selectedTab] = value;
    }

    @action
    addGame() {
        this._games.push([]);
        this._gamesStatus.push(NOT_TOUCHED);
        this._selectedSystem.push(DEFAULT_SYSTEM_NUMBER);
    }

    get gamesStatus() {
        return this._gamesStatus[this.selectedTab];
    }

    @action
    addNumberToGame(value) {
        if(value> 0 && value <= NUMBERS_PER_BOARD ) {
            this._gamesStatus[this._selectedTab] = VALID;
            this._games[this._selectedTab].push(value);
        }
    }

    @action
    removeNumberFromGame(value) {
         const index = this._games[this._selectedTab].findIndex(element => element === value);
         this._games[this._selectedTab].splice(index, 1);
    }

    isNumberSelected(value) {
        const found = this._games[this._selectedTab].find(element => element === value);
        return !!found;
    }

}