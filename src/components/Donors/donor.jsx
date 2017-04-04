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
    customWidth: {
        width: 200,
    },
};


const items = [];
for (let i = 0; i < 100; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}


class Donor extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
        this.state = {
            value: 1,
            bloodGroup: '',
        };

    }
    submit(ev) {
        ev.preventDefault();
        // console.log("dadadad");
        const newDonor = {
            // name: this.props.LoginData.email,
            // email: this.props.LoginData.email,
            // photo: this.props.LoginData.photoURL,
            weight: this.refs.weight.getValue(),
            age: this.refs.age.getValue(),
            address: this.refs.address.getValue(),
            bloodGroup: this.state.bloodGroup, 
            // bloodGroup: this.state.bloodGroup,
        }
        console.log(newDonor, this.state.bloodGroup)

        // console.log(newDonor, this.state.blood );
        this.props.SubmitData(newDonor, this.state.bloodGroup);
    }

    handleChange(e, key) {
        // e.preventDefault();
        var bloodGroup = e.target.value;
        console.log(e.target.value);
        
        this.setState({
            bloodGroup:bloodGroup
        })
        // this.setState({value: key + 1,
        // bloodGroup: e.target.childNodes[0].nodeValue
        // });
        
        // console.log(this.state.value);
    }
    render() {
        return (
            <div >

                <center>
                    <h1>Donate please if you have enough blood</h1>
                    <form onSubmit={this.submit}>
                        <Paper style={style} zDepth={3} >
                            <TextField
                                hintText="Enter Age"
                                ref="age"
                                type="number"
                                floatingLabelText="Your Age"
                                required="isRequired"
                            /><br />
                            <TextField
                                hintText="Enter your weight"
                                ref="weight"
                                type="number"
                                floatingLabelText="Your Wight"
                                required="isRequired"
                            /><br />
                            <TextField
                                hintText="Enter your Address"
                                ref="address"
                                type="text"
                                floatingLabelText="Your Address"
                                required="isRequired"
                            /><br />
                            <br />

                            <select ref="bloodGroup" onChange={this.handleChange.bind(this)} style={{ marginRight: 18, fontSize: 20 }} required="isRequired">
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

                            <RaisedButton label="Donate" type="submit" primary={true} style={style2} />
                        </Paper>

                    </form>

                </center>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ IsLoggedIn, SubmitData }, dispatch);
}

function mapStateToProps({ Islogged, LoginData }) {
    return { Islogged, LoginData }
}


export default connect(mapStateToProps, mapDispatchToProps)(Donor)




//export default App;
