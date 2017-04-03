import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CombineReducers from '../reducers/reducers'
// import { createLogger } from 'redux-logger';


// var Logger = createLogger();

const confStore = (initialState) => createStore(
    CombineReducers,
    initialState,
    applyMiddleware(thunk)
);

export default confStore;