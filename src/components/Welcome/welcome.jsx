import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IsLoggedIn } from '../../actions/actions';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            value: 1
        };

    }

    render() {
        return (
            <div>
                <h1>Welcome</h1><br />
                <Link to="/donor">
                    <RaisedButton primary={true} label="Donate Blood" />
                </Link>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ IsLoggedIn }, dispatch);
}

function mapStateToProps({ isLogged }) {
    return { isLogged };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);



// export default Welcome;