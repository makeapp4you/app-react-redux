import React, {Component} from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupAction';

class SignUpPage extends Component {
    render() {
        const {userSignupRequest} = this.props;
        console.log(userSignupRequest);
        return (
            <div className="class-name">
                <SignupForm userSignupRequest={userSignupRequest} />
            </div>
        );
    }
}
SignUpPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignUpPage);
