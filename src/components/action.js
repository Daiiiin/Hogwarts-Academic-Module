import React, { Component } from 'react';
import $ from 'jquery';
import { Nav } from 'react-bootstrap';

export class LogOut extends Component {
    constructor(props) {
      super(props);
      this.logoutClick = this.logoutClick.bind(this);
    }
    
    logoutClick() {
      $.ajax({
        type: 'GET',
        url: 'http://localhost/Hogwarts-Academic-Module/src/php/logout-action.php',
        success: function(response) {
          if(response["status"] === 200){
            window.location.replace('/'); 
          }
        }
      });
    }
    
    render() {
      return(
        <Nav.Link onClick={this.logoutClick}>Logout</Nav.Link>
      );
    }
}