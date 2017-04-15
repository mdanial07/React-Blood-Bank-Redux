import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { bindActionCreators } from 'redux';
import * as firebase from 'firebase';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { browserHistory } from "react-router";
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { IsLoggedIn, BloodSort, Signout } from '../../actions/actions';

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}
const style = {
    backgroundColor: '#d24231',
    header: {
        backgroundColor: '#CD0000',
    },
    abc: {
        width: '100%',
        float: 'left',
    },
    paper: {
        height: 'auto',
        width: '70%',
        margin: 0,
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
   
    componentWillReveiveProps(prop) {
        console.log(this.prop.donors);
    }

    handleChange(e, key) {
        e.preventDefault();
        var bloodGroup = e.target.value;
        console.log(e.target.value);
        this.props.BloodSort(bloodGroup);
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.IsLoggedIn(false);
                browserHistory.replace('/welcome');
            }
            console.log("is logged in", this.props.isLogged);
        })
    }

    signout(ev) {
        ev.preventDefault();
        this.props.Signout();
    }

    render() {
        return (
            <div>
                <center>
                    <AppBar className="abc" style={style.header}
                        title={<span style={styles.paper} >Blood Donate System</span>}
                        iconElementLeft={<IconButton></IconButton>}
                        iconElementRight={<FlatButton label="Sign-Out" onClick={this.props.Signout} />}
                    />
                    <br /><br />
                    <Link to="/donor">
                        <RaisedButton  backgroundColor="#CD0000" labelColor="#ffffff"label="Donate Blood" />
                    </Link>
                    <br /><br /><br /><br />
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
                    <br /><br/><br/>
                    <Paper style={style.paper} zDepth={1} >
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>Image</TableHeaderColumn>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Age</TableHeaderColumn>
                                    <TableHeaderColumn>Blood Group</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.props.donors.map((val, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <TableRowColumn>{i + 1}</TableRowColumn>
                                            <TableRowColumn><Avatar src="images/ok-128.jpg" /></TableRowColumn>
                                            <TableRowColumn>{val.name}</TableRowColumn>
                                            <TableRowColumn>{val.age}</TableRowColumn>
                                            <TableRowColumn>{val.bloodGroup}</TableRowColumn>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                    <br />
                    <br />
                </center>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ IsLoggedIn, Signout, BloodSort }, dispatch);
}

function mapStateToProps({ Islogged, donors, LoginData }) {
    return { Islogged, donors, LoginData };

}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

