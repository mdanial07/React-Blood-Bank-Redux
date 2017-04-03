import firebase from 'firebase';
import { browserHistory } from 'react-router';

export const IS_LOGGED = "Is_LoggedIn";
export const LOGIN_DATA = "Login_Data";
export const LOGIN_ERROR = "Login_Error";
export const AVAILABLE_DONORS = "Available_Donors";

export function IsLoggedIn(IsLoggedIn) {
    return {
        type: IS_LOGGED,
        IsLoggedIn
    }
}

export function LoginData(LoginData) {
    return {
        type: LOGIN_DATA,
        LoginData
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

export function Login() {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var user = result.user;
            console.log("Login SuccessFully");
            dispatch(IsLoggedIn(true))
            console.log(user.photoURL);        
            dispatch(LoginData(user.photoURL));
            browserHistory.replace('/welcome');

        }).catch(function (error) {
            dispatch(LoginError(error));
        });
    }
}

export function SubmitData(users, bloodgroup){
    return(dispatch) => {
        firebase.database().ref('bloodgroup/' + bloodgroup + '/').push({users})
        browserHistory.replace('/welcome'); 
    }
}