import { combineReducers } from 'redux';
import userList from "./userList";
import coinList from './coinList';

export default combineReducers({
  coinList,
  userList,
});
