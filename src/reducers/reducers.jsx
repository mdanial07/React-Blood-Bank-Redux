import { IS_LOGGED, LOGIN_DATA, LOGIN_ERROR, AVAILABLE_DONORS } from '../actions/actions';
import { combineReducers } from 'redux';


function IS_LOGGED_REDUCER(state = false, action) {
    switch (action.type) {
        case IS_LOGGED:
            return action.IsLoggedIn;
        default:
            return state;
    }
}

function LOGIN_DATA_REDUCER(state = "", action) {
    // console.log(action.LoginData)
    switch (action.type) {
        case LOGIN_DATA:
            return action.LoginData;
        default:
            return state;
    }
}

function LOGIN_ERROR_REDUCER(state = false, action) {
    switch (action.type) {
        case LOGIN_ERROR:
            return action.LoginError;
        default:
            return state;
    }
}

function AVAILABLE_DONORS_REDUCER(state = [], action) {
    // console.log(action.AvailableDonors)
    switch (action.type) {
        case AVAILABLE_DONORS:
        
        return action.AvailableDonors;
        default:
            return state;
    }
}

const CombineReducers = combineReducers({

    Islogged: IS_LOGGED_REDUCER,
    LoginData: LOGIN_DATA_REDUCER,
    LoginError: LOGIN_ERROR_REDUCER,
    donors: AVAILABLE_DONORS_REDUCER
})

export default CombineReducers;