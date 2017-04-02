import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submit, IsLoggedIn } from '../../actions/actions';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    height: 400,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};
const style2 = {
    margin: 12,
};


class Donor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            blood: '',
        }
    }

    handleChange = (event, index, value) => this.setState({ value });

    submit(ev) {
        ev.preventDefault();
        const newDonor = {
            name: this.props.LoginData.displayName,
            email: this.props.LoginData.email,
            photo: this.props.LoginData.photoURL,
            weight: this.refs.weight.getValue(),
            age: this.refs.age.getValue(),
            address: this.refs.address.getValue(),
            blood: this.state.blood,
        }

        // console.log(newDonor, this.state.blood );
        this.props.submit(newDonor,this.state.blood);

    }


    render() {
        return (
            <div >
                <h1>Donate please if you have enough blood</h1>

                <Paper style={style} zDepth={3} >
                    <form onSubmit={this.submit.bind(this)}>
                        <TextField
                            hintText="Enter Age"
                            ref="age"
                            type="number"
                            floatingLabelText="Your Age"
                            required="required"
                        /><br />
                        <TextField
                            hintText="Enter your weight"
                            ref="weight"
                            type="number"
                            floatingLabelText="Your Wight"
                            required="required"
                        /><br />
                        <TextField
                            hintText="Enter your Address"
                            ref="address"
                            type="text"
                            floatingLabelText="Your Address"
                            required="required"
                        /><br />
                        <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
                            <MenuItem value={1} primaryText="AB+" />
                            <MenuItem value={2} primaryText="AB-" />
                            <MenuItem value={3} primaryText="A-" />
                            <MenuItem value={4} primaryText="A+" />
                            <MenuItem value={5} primaryText="B+" />
                            <MenuItem value={6} primaryText="B-" />
                            <MenuItem value={7} primaryText="O+" />
                            <MenuItem value={8} primaryText="O-" />
                        </DropDownMenu>
                        <RaisedButton label="Primary" primary={true} style={style2} />
                    </form>
                </Paper>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ IsLoggedIn, submit }, dispatch);
}

function mapStateToProps({ isLogged, LoginData }) {
    return { isLogged, LoginData }
}


export default connect(mapStateToProps, mapDispatchToProps)(Donor)




//export default App;
