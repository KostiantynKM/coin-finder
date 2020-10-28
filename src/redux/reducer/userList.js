import produce from 'immer';
import { ADD_COIN, DELETE_COIN, LOAD_USER_COINS} from '../constants';

const initialState = {
  loaded: null,
  entities:[],
};

export default (state = initialState, action) =>
    produce(state, (draft) => {
      const { type, localData=[], payload} = action;

      switch (type) {

          case LOAD_USER_COINS: {
              draft.loaded = true;
              draft.entities = [ ...draft.entities, ...localData ];
              break;
          }
          case ADD_COIN: {
              if (draft.entities.includes(payload.coinId)) {
                  break;
              }
              draft.entities.push(payload.coinId);
              break;
          }
          case DELETE_COIN: {
              console.log()
              draft.entities.splice(payload.index, 1);
              break;
          }

        default:
          return;
      }
    });
