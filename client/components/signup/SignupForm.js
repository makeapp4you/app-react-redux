import React, { Component } from 'react';
import timezones from '../../data/timezone';
import map from 'lodash/map';
import classnames from 'classnames';

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
       this.setState({ errors: {}, isLoading: true });
        this.props.userSignupRequest(this.state).then(()=>{},
            // (err) => console.log({errors: err.response.data, isLoading: false })
            (err) => this.setState({errors: err.response.data, isLoading: false})
        );

    }
    render() {
        const options = map(timezones, (val, key) => <option key={val} value={val}>{key}</option>
        );
        const {errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Form signup</h1>
                <div className={classnames("form-group", { 'has-error': errors.username })}>
                    <label className="control-label">User Name</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control" />
                {errors.username && <span className="help-block">{errors.username}</span>} 
                </div>

                <div className={classnames("form-group", { 'has-error': errors.email })}>
                        <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className="form-control" />
                {errors.email && <span className="help-block">{errors.email}</span>} 
                </div>

                <div className={classnames("form-group", { 'has-error': errors.password })}>
                        <label className="control-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            className="form-control" />
                    {errors.password && <span className="help-block">{errors.password}</span>} 
                </div>

                <div className={classnames("form-group", { 'has-error': errors.rePassword })}>
                        <label className="control-label">RePassword</label>
                        <input
                            type="password"
                            name="rePassword"
                            value={this.state.rePassword}
                            onChange={this.onChange}
                            className="form-control" />
                    {errors.rePassword && <span className="help-block">{errors.rePassword}</span>} 
                </div>

                <div className="form-group">
                        <label className="control-label">Timezone</label>
                        <select
                            className="form-control"
                            name="timezone"
                            onChange={this.onChange}
                            value={this.state.timezone}>
                            <option value="" disabled>Choose Your Timezone</option>
                            {options}
                        </select>
                 </div>

                <div className="form-group">
                        <button className="btn btn-primary btn-lg">SignUp</button>
                </div>
            </form>
        );
    }
}

SignupForm.propsTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;