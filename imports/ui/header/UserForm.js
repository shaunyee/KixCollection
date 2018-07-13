import React, { Component } from 'react';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class UserForm extends Component {
    state = {
        login: true,
        open: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

  render() {
      const { user, client } = this.props;
      const { login} = this.state;
      if(user._id) { 
    return(
        <Button 
            enter="true" 
            variant="contained" 
            color="primary" 
            onClick={() => {
                Meteor.logout();
                client.resetStore();
                    }}>
        Logout
        </Button>
      )
     }
    return (
        <div>
        <Button 
          onClick={this.handleClickOpen}
          variant="contained" 
          color="primary" 
        >Login/Register</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Button 
                enter="true" 
                variant="contained" 
                color="primary" 
                onClick={() => this.setState({login: !login})}>
                {login ? 'Register' : 'Login'}
            </Button>
         </DialogTitle>
          <DialogContent>
          {login ? (
           <LoginForm client={client} />
        ) : (
            <RegisterForm client={client} />
        )} <br />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}