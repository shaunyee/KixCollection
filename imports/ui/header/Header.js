import React, { Component } from 'react';
import UserForm from './UserForm';
import './header.css';

class Header extends Component {
  render() {
      const {user, client} = this.props;
    return (
        <div className="header">
            <div className="logo">
                Kix Collection
            </div>
                <div className="header-right">
                    <UserForm user={user} client={client}/>
                </div>
        </div>
    )
  }
}
export default Header;