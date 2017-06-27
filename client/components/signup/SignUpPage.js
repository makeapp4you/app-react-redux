import React, {Component} from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupAction';
import {addFlashMessage} from '../../actions/flashMessages';


class SignUpPage extends Component {
    render() {
        const {userSignupRequest, addFlashMessage} = this.props;
        console.log(userSignupRequest);
        return (
            <div className="class-name">
                <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
            </div>
        );
    }
}
SignUpPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignUpPage);
