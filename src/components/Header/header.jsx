import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import { Link } from 'react-router';
import { isLoggedIn, login } from '../../actions/actions';
import { browserHistory } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}
const style = {
    backgroundColor: '#d24231',
    header: {

        backgroundColor: 'cherry',
    }
};
const styles = {
    paper: {
        fontSize: 30,
        textAlign: 'center',
    },
};

class Header extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.IsLoggedIn(true);
                browserHistory.replace('/welcome');
            }
            else{
                this.props.LoginData(null);
                this.props.isLoggedIn(false);
                browserHistory.replace('/');
            }
            console.log("is logged in", this.props.isLogged);
        })
    }

    login(ev) {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var abc = result.abc;
            console.log("Login SuccessFully");
            console.log(abc.photoURL);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });

        // var provider = new firebase.auth.FacebookAuthProvider();
        // firebase.auth().signInWithPopup(provider).then(function (result) {
        //     var token = result.credential.accessToken;
        //     var user = result.user;
        // }).catch(function (error) {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     var email = error.email;
        //     var credential = error.credential;
        //     // ...
        // });
    }

    render() {
        return (
            <div>
                <center>
                    <AppBar className="abc" style={style.header}
                        title={<span style={styles.paper} >Blood Bank</span>}
                        iconElementLeft={<IconButton></IconButton>}
                        iconElementRight={<FlatButton label="SignIn with Google" style={style} onClick={this.login}> </ FlatButton>}
                    />
                </center>
            </div>
        )
    }
}

function mapDispatchToProps(dipatch) {
    return bindActionCreators({ isLoggedIn, login });
}
function mapStateToProps({ isLogged, LoginError }) {
    return { isLogged, LoginError };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;