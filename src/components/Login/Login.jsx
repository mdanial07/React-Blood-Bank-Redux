import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import { Link } from 'react-router';


function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}
const style = {
    margin: 12,
};
const styles = {
    paper: {
        height: 350,
        width: 400,
        margin: 70,
        textAlign: 'center',
        display: 'inline-block',
    },
};

class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
    }

    login(ev) {
        ev.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var abc = result.abc;
            console.log("Login SuccessFully");
            console.log(abc.photoURL);
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });      
    }

    render() {
        return (
            <div>

                <AppBar className="abc"
                    title={<span>Blood Bank</span>}
                    iconElementLeft={<IconButton></IconButton>}
                    iconElementRight={<Link to="/Signup"><FlatButton label="Create Account"> </ FlatButton> </Link>}
                />
                <center>
                    <Paper style={styles.paper} zDepth={2} >

                        <br />
                        <h1>Sign In</h1>
                        <TextField
                            hintText="Enter your email"
                            floatingLabelText="Email Address"
                            ref="email"
                            type="Email"
                            required="required"
                        /><br />
                        <TextField
                            hintText="Enter your password"
                            ref="pass"
                            type="Password"
                            floatingLabelText="Password"
                        /><br />
                        <br />
                        <RaisedButton type="button" onClick={this.login} label="Login" primary={true} style={style} />
                    </Paper>
                </center>
            </div>
        )
    }
}

export default Login;