import React, {Component} from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest, isUserExists} from '../../actions/signupAction';
import {addFlashMessage} from '../../actions/flashMessages';


class SignUpPage extends Component {
    render() {
        const {userSignupRequest, addFlashMessage, isUserExists} = this.props;
        console.log(userSignupRequest);
        return (
            <div className="class-name">
                <SignupForm userSignupRequest={userSignupRequest} 
                addFlashMessage={addFlashMessage}
                isUserExists={isUserExists}
             />
            </div>
        );
    }
}
SignUpPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignUpPage);
