import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default class RegisterForm extends Component {
  state = {
    email: "",
    password: "",
    username: ""
  };
  registerUser = e => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      },
      error => {
        if (!error) {
          this.props.client.resetStore();
        }
        console.log(error);
      }
    );
  };

  handleChange = (email, password, username) => event => {
    this.setState({
      [email]: event.target.value,
      [password]: event.target.value,
      [username]: event.target.value
    });
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: teal[500] }, 
        secondary: { main: '#11cb5f' }
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <form onSubmit={this.registerUser}>
         <TextField
            id="username"
            label="Username"
            onChange={this.handleChange('username')}
            margin="normal"
          /><br />
          <TextField
            id="email"
            label="Email"
            type="text"
            onChange={this.handleChange('email')}
            margin="normal"
          /><br />
          <TextField
            id="password"
            label="Password"
            type="password"
            onChange={this.handleChange('password')}
            margin="normal"
          /><br />
          <Button enter="true" variant="contained" color="primary" type="submit">Register User</Button><br />
        </form>
      </MuiThemeProvider>
    );
  }
}