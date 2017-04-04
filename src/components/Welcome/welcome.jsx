import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import * as firebase from 'firebase';
import { browserHistory } from "react-router";
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IsLoggedIn, Signout } from '../../actions/actions';

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


class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            value: 1
        };

    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.LoginData(user);
                this.props.IsLoggedIn(false);
                browserHistory.replace('/welcome');
            }
            
            console.log("is logged in", this.props.isLogged);
        })
    }

    signout(ev) {
        ev.preventDefault();
        this.props.Signout();

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
                        // iconElementRight={<FlatButton label="Sign-Out" style={style} onClick={this.signout.bind(this)}> </ FlatButton>}
                        iconElementRight={<FlatButton style={{ "visibility": this.props.IsLoggedIn === true ? "visible" : "hidden" }} label="Sign-Out" onClick={this.props.Signout} />}

                  
                  />
                <h1>Blood Donate System</h1><br />
                <Link to="/donor">
                    <RaisedButton primary={true} label="Donate Blood" />
                </Link>
                </center>
                
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ IsLoggedIn, Signout }, dispatch);
}

function mapStateToProps({ IsloggedIn }) {
    return { IsloggedIn };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);



// export default Welcome;