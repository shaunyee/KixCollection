import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';


class LoginForm extends Component {
    registerUser = (e) => {
        e.preventDefault();
        Meteor.loginWithPassword(this.username.value, this.password.value,
            error => {
                console.log(error);
            }
        );
    }
  render() {
    return (
        <form onSubmit={this.registerUser}>
        <input type="text" placeholder="Username" ref={input => (this.username = input)}/>
        <input type="password" placeholder="Password" ref={input => this.password = input}/>
        <button type="submit">Login</button>
        </form>
    )
  }
}
export default LoginForm;