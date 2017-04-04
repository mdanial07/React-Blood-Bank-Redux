import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SubmitData, IsLoggedIn } from '../../actions/actions';
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
            bloodGroup: '',
        }
    }

    submit(ev) {
        ev.preventDefault();
        console.log("dadadad");

        const newDonor = {
            // name: this.props.LoginData.email,
            // email: this.props.LoginData.email,
            // photo: this.props.LoginData.photoURL,
            weight: this.refs.weight.getValue(),
            age: this.refs.age.getValue(),
            address: this.refs.address.getValue(),
            bloodGroup: this.state.bloodGroup,
        }
        console.log(newDonor, this.state.bloodGroup)

        // console.log(newDonor, this.state.blood );
        this.props.SubmitData(newDonor, this.state.bloodGroup);

    }

    handleChange(ev, key, value) {
        ev.preventDefault();
        this.setState({
            value: key + 1,
            bloodGroup: ev.target.childNodes[0].nodeValue
        });
        console.log(this.state.bloodGroup);
    }


    render() {
        return (
            <div >
                <center>
                    <h1>Donate please if you have enough blood</h1>

                    <Paper style={style} zDepth={3} >
                        <form>
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
                            <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)} ref="bloodGroup"  required="required">
                                <MenuItem value={1} primaryText="Never" />
                                <MenuItem value={2} primaryText="Every Night" />
                                <MenuItem value={3} primaryText="Weeknights" />
                                <MenuItem value={4} primaryText="Weekends" />
                                <MenuItem value={5} primaryText="Weekly" />
                            </DropDownMenu>
                            <RaisedButton label="Donate" onClick={this.submit.bind(this)} primary={true} style={style2} />
                        </form>
                    </Paper>
                </center>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ IsLoggedIn, SubmitData }, dispatch);
}

function mapStateToProps({ islogged, LoginData }) {
    return { islogged, LoginData }
}


export default connect(mapStateToProps, mapDispatchToProps)(Donor)




//export default App;
