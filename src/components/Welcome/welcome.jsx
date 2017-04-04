import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { bindActionCreators } from 'redux';
import * as firebase from 'firebase';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { browserHistory } from "react-router";
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { IsLoggedIn, BloodSort, Signout } from '../../actions/actions';


const style = {
    backgroundColor: '#d24231',
    header: {

        backgroundColor: 'cherry',
    },
    abc: {
        width: '100%',
        float: 'left',
    },
    paper: {
        height: 'auto',
        width: '60%',
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
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
            expanded: false,
            value: 1
        };
    }
    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };
    componentDidMount() {
        // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //         this.props.LoginData(user);
        //         this.props.IsLoggedIn(false);
        //         browserHistory.replace('/welcome');
        //     }
        //     console.log("is logged in", this.props.IsLogged);
        // })
        // this.props.BloodSort("AB+");
        // console.log(this.props.LoginData);
    }

    componentWillReveiveProps(prop) {
        console.log(this.prop.donors);
    }

    handleChange(e, key) {
        e.preventDefault();
        var bloodGroup = e.target.value;
        console.log(e.target.value);
        // this.setState({ value: 1 + key });
        // var bloodGroup = e.target.childNodes[0].nodeValue;
        // console.log(bloodGroup);
        this.props.BloodSort(bloodGroup);
        console.log(this.props.donors)
    }
    // check() {
    //     this.props.BloodSort("A+");
    //     console.log(this.props.donors)
    // }

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
                        title={<span style={styles.paper} >Blood Donate System</span>}
                        iconElementLeft={<IconButton></IconButton>}
                        // iconElementRight={<FlatButton label="Sign-Out" style={style} onClick={this.signout.bind(this)}> </ FlatButton>}
                        iconElementRight={<FlatButton label="Sign-Out" onClick={this.props.Signout} />}
                    />
                    <br />
                    <br />
                    <Link to="/donor">
                        <RaisedButton primary={true} label="Donate Blood" />
                    </Link>
                    <br />
                    <br />
                    <br />
                    <br />
                    <select ref="bloodGroup" onChange={this.handleChange.bind(this)} style={{ marginRight: 18, fontSize: 20 }}>
                        <option value="Select Blood">Select Blood</option>
                        <option value="AB+">AB+</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="B-">B-</option>
                        <option value="A-">A-</option>
                        <option value="AB-">AB-</option>
                    </select>
                    <br />
                    {/*<Paper style={style.paper} zDepth={1} >
                        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                            <CardHeader style={style.abc}
                                title="URL Avatar"
                                subtitle="Subtitle"
                                avatar="images/ok-128.jpg"
                                actAsExpander={true}
                            />
                        </Card>
                    </Paper>*/}
                    <br />
                    <br />
                    {/*<span>Danial</span>*/}

                    {this.props.donors.map((val, i) => {

                        return (
                            <div>
                                <Paper style={style.paper} zDepth={1} >
                                    <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                                        <CardHeader style={style.abc}
                                            title={val.age}
                                            subtitle={val.bloodGroup}
                                            avatar="images/ok-128.jpg"
                                            actAsExpander={true}
                                        />
                                    </Card>
                                </Paper>
                                {/*<div key={i}>
                                    <span>{val.age}</span>
                                    <span>{val.bloodGroup}</span>
                                    <span>{val.wight}</span>
                                    <span>{val.address}</span>
                                </div>*/}
                            </div>
                        )
                    })}

                    <br />
                    <br />
                    {/*<button onClick={this.check.bind(this)}> ok</button>*/}
                </center>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ IsLoggedIn, Signout, BloodSort }, dispatch);
}

function mapStateToProps({ Islogged, donors, LoginData }) {
    return { Islogged, donors };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);



// export default Welcome;