import React, { Component } from 'react';
import timezones from '../../data/timezone';
import map from 'lodash/map';
import classnames from 'classnames';

import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            rePassword: '',
            timezone: '',
            errors: {},
            isLoading: false
        }
        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);

    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        // console.log(this.state); 
        // dung props goi qua tu SignupPage va truyen vao data form input
        // tu SignupPage ta goi SignupAction tao ham request userSignupRequest(nhanThamSo) 
        // Tra ve ket qua neu co.
        // Server tra ket qua errors ve > recept result and show to view
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state).then(() => { },
                // (err) => console.log({errors: err.response.data, isLoading: false })
                (err) => this.setState({ errors: err.response.data, isLoading: false })
            );
        }


    }
    render() {
        const options = map(timezones, (val, key) => <option key={val} value={val}>{key}</option>
        );
        const { errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Form signup</h1>
                <TextFieldGroup
                    error={errors.username}
                    label="username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                    text="text"
                />
                <TextFieldGroup
                    error={errors.email}
                    label="email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                    text="text"                    
                />
                <TextFieldGroup
                    error={errors.password}
                    label="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />
                <TextFieldGroup
                    error={errors.rePassword}
                    label="rePassword"
                    onChange={this.onChange}
                    value={this.state.rePassword}
                    field="rePassword"
                    type="password"                    
                />
                <div className={classnames("form-group", { 'has-error': errors.timezone })}>
                    <label className="control-label">Timezone</label>
                    <select
                        className="form-control"
                        name="timezone"
                        onChange={this.onChange}
                        value={this.state.timezone}>
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">SignUp</button>
                </div>
            </form>
        );
    }
}

SignupForm.propsTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;