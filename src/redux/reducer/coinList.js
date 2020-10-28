import produce from 'immer';
import { arrToMap, sort } from '../utils';
import {LOAD_COINS, REQUEST, SUCCESS, FAILURE, ADD_COIN, DELETE_COIN, SORT_BY } from '../constants';

const initialState = {
  loading:null ,
  loaded: null,
  error: null,
  entities: {},
  entitiesArr:[],
};

export default (state = initialState, action) =>
    produce(state, (draft) => {
      const { type, response, error, payload} = action;

      switch (type) {
        case LOAD_COINS + REQUEST: {
          draft.loading = true;
          break;
        }
        case LOAD_COINS + SUCCESS: {
          draft.loading = false;
          draft.loaded = true;
          draft.entities = { ...draft.entities, ...arrToMap(response) };
          draft.entitiesArr = [ ...draft.entitiesArr, ...response ];
          break;
        }
        case LOAD_COINS + FAILURE: {
          draft.loading = false;
          draft.loaded = false;
          draft.error = error;
          break;
        }
        case ADD_COIN: {
           draft.entities[payload.coinId].flag=true;
          break;
        }
        case DELETE_COIN: {
          draft.entities[payload.coinId].flag=false;
          break;
        }
        case SORT_BY: {
          draft.entitiesArr = sort(payload,state.entitiesArr);
          break;
        }
        default:
          return;
      }
    });
