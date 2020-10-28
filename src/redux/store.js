import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import api from './middleware/api';
import localStorage from "./middleware/localStorage";

const enhancer = applyMiddleware(
    localStorage,
    api,
    logger,
);

export default createStore(reducer, composeWithDevTools(enhancer));
