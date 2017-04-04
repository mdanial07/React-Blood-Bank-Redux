import firebase from 'firebase';
import { browserHistory } from 'react-router';

export const IS_LOGGED = "Is_Logged";
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

export function LoginError(LoginError) {
    return {
        type: LOGIN_ERROR,
        LoginError
    }
}

export function AvailableDonors(AvailableDonors) {
    return {
        type: AVAILABLE_DONORS,
        AvailableDonors
    }
}

export function Login() {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((user) => {
            console.log("Login SuccessFully");
            dispatch(IsLoggedIn(true))
            console.log(user.emailqq);        
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

export function Signout() {
    return (dispatch) => {
        firebase.auth().signOut().then(function () {
            // dispatch(IsLoggedIn(false));
            browserHistory.replace('/');
            console.log("SignOut SuccessFully");
    
        }).catch(function(error){
            dispatch(LoginError(error));
        })
    }
}