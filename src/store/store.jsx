import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CombineReducers from '../reducers/reducers'

const confStore = (initialState) => createStore(
    CombineReducers,
    initialState,
    applyMiddleware(thunk)
);

export default confStore;