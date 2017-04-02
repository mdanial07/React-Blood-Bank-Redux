import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import {connect}from 'react-redux'
import './signup.css'


function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
    paper: {
        height: 400,
        width: 400,
        margin: 70,
        textAlign: 'center',
        display: 'inline-block',
    },
};


class Signup extends Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
    }

    signup(ev) {
        ev.preventDefault();
        console.log(this.refs.email.getValue());
        console.log(this.refs.pass.getValue());
        console.log(this.refs.name.getValue());

        // let name = this.refs.name.getValue();
        // let email = this.refs.email.getValue();
        // let pass = this.refs.pass.getValue();
        // let userSignUp = {
        //     name: name,
        //     email: email,
        //     pass: pass
        // }
        // this.props.signup(userSignUp)
        // console.log(this.props.firedata)
    }

    render() {
        return (
            <div>
                <AppBar className="abc"
                    title={<span>Blood Bank</span>}
                    iconElementLeft={<IconButton></IconButton>}
                    iconElementRight={<Link to="/"> <FlatButton label="Go to login"> </ FlatButton> </Link>}
                />
                <center>
                    <Paper style={styles.paper} zDepth={2} >
                        <br />
                        <h1>Sign Up</h1>
                        <form onSubmit={this.signup.bind(this)}>
                            <TextField
                                hintText="Enter your name"
                                floatingLabelText="Your name"
                                ref="name"
                                type="Text"
                                required="required"
                            /><br />
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
                            
                            <RaisedButton type="button"  onClick={this.signup} label="Sign Up" primary={true} />
                        </form>
                    </Paper>
                </center>

            </div>
        )
    }
}

// const mapStateToProps =(state) =>{
//     return{
//         auth: state.AuthReducer,
//         firedata:state.firebaseval
//     };
// }
// const mapDispatchToProps =(dispatch) =>{
//     return{
//         signup: (userSignUp) =>{
//             dispatch(Signup(userSignUp));
//         }
//     };
// }

export default Signup;