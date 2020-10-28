import {
    LOAD_COINS,
    ADD_COIN,
    DELETE_COIN,
    SORT_BY,
    LOAD_USER_COINS,
} from './constants';


export const loadCoins = () => ({
  type: LOAD_COINS,
  CallAPI: 'https://api.coincap.io/v2/assets',
});
export const loadUserCoins = () => ({
    type: LOAD_USER_COINS,
    getData:true,
});
export const addCoin = (coinId) => ({
    type: ADD_COIN,
    payload: {coinId},
    setData:true,
});
export const deleteCoin = (index,coinId) => ({
    type: DELETE_COIN,
    payload: {index,coinId},
    setData:true,
});
export const sort = (field) => ({
    type:  SORT_BY,
    payload: field,
});