import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";
import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };
  login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.password, error => {
      console.log(error);
      if (!error) {
        this.props.client.resetStore();
      }
    });
  };

  handleChange = (email, password) => event => {
    this.setState({
      [email]: event.target.value,
      [password]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const theme = createMuiTheme({
      palette: {
        primary: { main: teal[500] }, 
        secondary: { main: '#11cb5f' }
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <form onSubmit={this.login}>
        <TextField
          id="email"
          label="Email"
          type="email"
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
          <Button enter="true" variant="contained" color="primary" type="submit">Login User</Button><br />
        </form>
      </MuiThemeProvider>
    );
  }
}
export default LoginForm;
