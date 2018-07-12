import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';


class RegisterForm extends Component {
    registerUser = (e) => {
        e.preventDefault();
        Accounts.createUser(
            {
            email: this.email.value,
            username: this.username.value,
            password: this.password.value
            },
            error => {
                console.log(error);
            }
        );
    }
  render() {
    return (
        <form onSubmit={this.registerUser}>
        <input type="email" placeholder="Email" ref={input => (this.email = input)}/>
        <input type="text" placeholder="Username" ref={input => (this.username = input)}/>
        <input type="password" placeholder="Password" ref={input => this.password = input}/>
        <button type="submit">Register User</button>
        </form>
    )
  }
}
export default RegisterForm;