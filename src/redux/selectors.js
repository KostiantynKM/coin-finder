import { createSelector } from 'reselect';
import {mapToArray,getById, arrToMap} from "./utils";


export const coinsLoadingSelector = (state) => state.coinList.loading;
export const coinsLoadedSelector = (state) => state.coinList.loaded;

export const userCoinsLoadedSelector = (state) => state.userList.loaded;

const coinsSelector = (state) => state.coinList.entities;
export const coinsArrSelector = (state) => state.coinList.entitiesArr;

export const userCoinsSelector = (state) => state.userList.entities;

export const coinsIdSelector = mapToArray(coinsSelector);
export const coinSelector = getById(coinsSelector);


export const findMatchesSelector= createSelector(
    coinsArrSelector,
    (_, { find }) => find.toLowerCase(),
    (coins, find) => {
        const search = coins.filter(( elem )=> (
            elem.id.toLowerCase().match(find) || elem.symbol.toLowerCase().match(find)
        ));
       return  Object.keys(arrToMap(search));
});