import React, { Component } from 'react';
// import $ from 'jquery';
import { Nav } from 'react-bootstrap';
import axios from 'axios';

export class LogOut extends Component {
    constructor(props) {
      super(props);
      this.logoutClick = this.logoutClick.bind(this);
    }

    logoutClick() {
      axios.get('http://localhost/Hogwarts-Academic-Module/src/php/logout-action.php', {
        withCredentials: true
      })
      .then(function() {
        window.location.replace('/');
      });
    }

    render() {
      return(
        <Nav.Link onClick={this.logoutClick}>Logout</Nav.Link>
      );
    }
}

class SandBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        var self = this;
        axios({
          method: 'GET',
          url: 'http://localhost/Hogwarts-Academic-Module/src/php/fetch-user-action.php',
          withCredentials: true
        })
        .then(function(res) {
          self.setState({data: res.data});   
        })
        .catch(function (error) {
          console.log(error);
       });
       
    }
    
    render() {
      var fetch = this.state.data;
        return (
              // this.state.data.map((result) => {
              //   return (
              //        <ul key={result.userID}>
              //         <li>{result.userID}</li>  
              //         <li>{result.fname}</li>    
              //         <li>{result.lname}</li>  
              //       </ul>
              //    );
              // })
              <h1>{ fetch.fname }</h1>
        );
    }
}
