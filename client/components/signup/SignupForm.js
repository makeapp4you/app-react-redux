import React, {Component} from 'react';
import timezones from '../../data/timezone';
import map from 'lodash/map';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            rePassword: '',
            timezone: ''
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
        this.props.userSignupRequest(this.state);
    }
    render() {
        const options = map(timezones, (val, key) => <option key={val} value={val}>{key}</option>
        );
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Form signup</h1>
                <div className="form-group">
                    <label className="control-label">User Name</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control"/>
                    <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">RePassword</label>
                        <input
                            type="password"
                            name="rePassword"
                            value={this.state.rePassword}
                            onChange={this.onChange}
                            className="form-control"/>
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
                </div>
            </form>
        );
    }
}

SignupForm.propsTypes = {
    userSignupRequest: React.PropTypes.func.isRequired 
}

export default SignupForm;