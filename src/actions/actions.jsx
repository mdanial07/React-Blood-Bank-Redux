import firebase from 'firebase';
import { browserHistory } from 'react-router';

export const IS_LOGGED = "is_loggedIn";
export const LOGIN_DATA = "login_data";
export const LOGIN_ERROR = "login_error";
export const AVAILABLE_DONORS = "available_donors";

export function IsLoggedIn(islogged) {
    return {
        type: IS_LOGGED,
        islogged
    }
}

export function LoginData(logindata) {
    return {
        type: LOGIN_DATA,
        logindata
    }
}

export function LoginError(loginerror) {
    return {
        type: LOGIN_ERROR,
        loginerror
    }
}

export function AvailableDonors(availabledonors) {
    return {
        type: AVAILABLE_DONORS,
        availabledonors
    }
}

export function login() {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var abc = result.user;
            console.log("Login SuccessFully");
            dispatch(IsLoggedIn(true))
            console.log(abc.photoURL);        
            dispatch(LoginData(abc.photoURL));
            browserHistory.replace('/welcome');

        }).catch(function (error) {
            dispatch(error);
        });
    }
}

export function submit(users, bloodgroup){
    return(dispatch) => {
        firebase.database().ref('bloodgroup/' + bloodgroup + '/').push({users})
        browserHistory.replace('/'); 
    }
}