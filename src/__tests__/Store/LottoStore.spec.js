import { LottoStore } from "../../Store/LottoStore";
import {NOT_TOUCHED, NOT_VALID, VALID} from "../../Shared/types/board-status";
import {DEFAULT_SYSTEM_NUMBER} from "../../Shared/app-constants";

describe("LottoStore", () => {
    test("on Init - should have defaults", () => {
        const store = new LottoStore();
        expect(store._selectedTab).toBe(0);
        expect(store._games).toStrictEqual([[],[],[]]);
        expect(store._gamesStatus).toStrictEqual([NOT_TOUCHED,NOT_TOUCHED,NOT_TOUCHED]);
        expect(store._selectedSystem).toStrictEqual(new Array(3).fill(DEFAULT_SYSTEM_NUMBER));
    })

    test("add Game", () => {
        const store = new LottoStore();
        store.addGame();
        expect(store._games).toStrictEqual([[],[],[],[]]);
        expect(store._gamesStatus).toStrictEqual([NOT_TOUCHED,NOT_TOUCHED,NOT_TOUCHED,NOT_TOUCHED,]);
        expect(store._selectedSystem).toStrictEqual(new Array(4).fill(DEFAULT_SYSTEM_NUMBER));
    })

    test("add 6 Numbers to Game", () => {
        const store = new LottoStore();
        store.addNumberToGame(10);
        store.addNumberToGame(15);
        store.addNumberToGame(30);
        store.addNumberToGame(40);
        store.addNumberToGame(43);
        store.addNumberToGame(28);
        expect(store._selectedTab).toBe(0);
        expect(store._games).toStrictEqual([[10,15,30,40,43,28],[],[]]);
        expect(store._gamesStatus).toStrictEqual([VALID,NOT_TOUCHED,NOT_TOUCHED]);
        expect(store._selectedSystem).toStrictEqual(new Array(3).fill(DEFAULT_SYSTEM_NUMBER));
    })

    test("add 5 Numbers to Game", () => {
        const store = new LottoStore();
        store.addNumberToGame(10);
        store.addNumberToGame(15);
        store.addNumberToGame(30);
        store.addNumberToGame(40);
        store.addNumberToGame(43);
        expect(store._selectedTab).toBe(0);
        expect(store._games).toStrictEqual([[10,15,30,40,43],[],[]]);
        expect(store._gamesStatus).toStrictEqual([NOT_VALID,NOT_TOUCHED,NOT_TOUCHED]);
        expect(store._selectedSystem).toStrictEqual(new Array(3).fill(DEFAULT_SYSTEM_NUMBER));
    })

    test("add 6 Numbers to Game (addNumbersToGame)", () => {
        const store = new LottoStore();
        store.addNumbersToGame([1,2,3,4,5,6], 0)
        expect(store._selectedTab).toBe(0);
        expect(store._games).toStrictEqual([[1,2,3,4,5,6],[],[]]);
        expect(store._gamesStatus).toStrictEqual([VALID,NOT_TOUCHED,NOT_TOUCHED]);
        expect(store._selectedSystem).toStrictEqual(new Array(3).fill(DEFAULT_SYSTEM_NUMBER));
    })

    test("add 6 * 3 Numbers to Game (addNumbersToGame)", () => {
        const store = new LottoStore();
        store.addNumbersToGame([1,2,3,4,5,6], 0)
        store.addNumbersToGame([1,2,3,4,5,6], 1)
        store.addNumbersToGame([1,2,3,4,5,6], 2)
        expect(store._selectedTab).toBe(0);
        expect(store._games).toStrictEqual([[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6]]);
        expect(store._gamesStatus).toStrictEqual([VALID,VALID,VALID]);
        expect(store._selectedSystem).toStrictEqual(new Array(3).fill(DEFAULT_SYSTEM_NUMBER));
    })
});